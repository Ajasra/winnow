import sys
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
import json

def fetch_arxiv(query, max_results=3):
    # Determine if query is an ID list or text search
    encoded_query = urllib.parse.quote(query)
    # Check if string looks like an arXiv ID (e.g., 2303.12345 or 2401.0012)
    is_id = query.replace('.', '').replace('v', '').isdigit() or "/" in query

    if is_id:
        url = f"http://export.arxiv.org/api/query?id_list={encoded_query}"
    else:
        url = f"http://export.arxiv.org/api/query?search_query=all:{encoded_query}&max_results={max_results}"

    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'WinnowResearchAssistant/1.0'}
        )
        with urllib.request.urlopen(req) as response:
            xml_data = response.read()
    except Exception as e:
        print(json.dumps({"success": False, "error": f"HTTP request failed: {str(e)}"}))
        return

    # Namespaces for parsing arXiv Atom feed XML format
    namespaces = {
        'atom': 'http://www.w3.org/2005/Atom',
        'arxiv': 'http://arxiv.org/schemas/atom'
    }

    try:
        root = ET.fromstring(xml_data)
    except Exception as e:
        print(json.dumps({"success": False, "error": f"XML parse failed: {str(e)}"}))
        return

    entries = root.findall('atom:entry', namespaces)
    if not entries:
        print(json.dumps({"success": False, "error": f"No papers found matching the query: '{query}'"}))
        return

    results = []
    for entry in entries:
        title_el = entry.find('atom:title', namespaces)
        summary_el = entry.find('atom:summary', namespaces)
        id_el = entry.find('atom:id', namespaces)
        published_el = entry.find('atom:published', namespaces)

        title = title_el.text.strip().replace('\n', ' ') if title_el is not None else "Untitled"
        summary = summary_el.text.strip().replace('\n', ' ') if summary_el is not None else ""
        id_url = id_el.text.strip() if id_el is not None else ""
        arxiv_id = id_url.split('/abs/')[-1].split('v')[0] if id_url else ""
        published = published_el.text.strip()[:10] if published_el is not None else ""
        
        authors = [author.find('atom:name', namespaces).text.strip() 
                   for author in entry.findall('atom:author', namespaces) 
                   if author.find('atom:name', namespaces) is not None]

        # Locate PDF and abstract links
        pdf_link = ""
        for link in entry.findall('atom:link', namespaces):
            if link.attrib.get('title') == 'pdf':
                pdf_link = link.attrib.get('href')
            elif link.attrib.get('type') == 'application/pdf':
                pdf_link = link.attrib.get('href')

        # Fallback if specific pdf tag is missing
        if not pdf_link and arxiv_id:
            pdf_link = f"https://arxiv.org/pdf/{arxiv_id}.pdf"

        results.append({
            "title": title,
            "authors": authors,
            "published": published,
            "arxiv_id": arxiv_id,
            "summary": summary,
            "pdf_link": pdf_link,
            "arxiv_url": id_url
        })

    print(json.dumps({"success": True, "papers": results}))

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"success": False, "error": "No query provided."}))
        sys.exit(1)
    
    # Reassemble argument string in case spaces were split
    fetch_arxiv(" ".join(sys.argv[1:]))