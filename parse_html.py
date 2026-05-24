from html.parser import HTMLParser

class TextParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []

    def handle_data(self, data):
        clean_data = data.strip()
        if clean_data:
            self.text.append(clean_data)

try:
    with open("site_text.txt", "r", encoding="utf-8") as f:
        html = f.read()
    parser = TextParser()
    parser.feed(html)
    with open("site_content.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(parser.text))
    print("Success")
except Exception as e:
    print(e)
