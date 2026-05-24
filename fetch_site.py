import urllib.request
import re

url = "https://www.aecci.org.in/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    # Simple strip tags for basic reading
    text = re.sub('<[^<]+?>', '\n', html)
    text = re.sub(r'\n\s*\n', '\n', text)
    with open("site_text.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Success. Saved to site_text.txt")
except Exception as e:
    print(e)
