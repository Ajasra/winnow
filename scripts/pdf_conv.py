# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "pdfplumber",
# ]
# ///
import sys
import pdfplumber

def convert(pdf_path, output_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            # pdfplumber extracts text using layout order (handling double columns naturally)
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"
    
    # Clean up double line-breaks often caused by column formatting
    clean_text = text.replace('\n\n', '\n')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(clean_text)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python pdf_conv.py <input.pdf> <output.md>")
        sys.exit(1)
    convert(sys.argv[1], sys.argv[2])