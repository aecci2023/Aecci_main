import urllib.request
import re

url = "https://www.aecci.org.in/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')

    # Simple regex to extract text content, removing script/style
    html = re.sub(r'<script.*?</script>', '', html, flags=re.DOTALL)
    html = re.sub(r'<style.*?</style>', '', html, flags=re.DOTALL)
    text = re.sub(r'<[^>]+>', ' ', html)

    # Clean up whitespace
    text = re.sub(r'\s+', ' ', text).strip()

    with open("clean_site.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Success. Saved to clean_site.txt")
except Exception as e:
    print(e)
