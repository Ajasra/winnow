# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "pypdf",
# ]
# ///
import sys
from pypdf import PdfReader # Lightweight Python PDF parser

def convert(pdf_path, output_path):
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    
    # Clean up double line-breaks often caused by column formatting
    clean_text = text.replace('\n\n', '\n')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(clean_text)

if __name__ == "__main__":
    convert(sys.argv[1], sys.argv[2])