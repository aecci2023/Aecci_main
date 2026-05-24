import urllib.request
import re

def fetch_and_parse(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        html = re.sub(r'<script.*?</script>', '', html, flags=re.DOTALL)
        html = re.sub(r'<style.*?</style>', '', html, flags=re.DOTALL)
        text = re.sub(r'<[^>]+>', '\n', html)
        text = re.sub(r'\n\s*\n', '\n', text).strip()
        return text
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

url = "https://www.aecci.org.in/about/about-chamber/"
content = fetch_and_parse(url)

# Print a specific chunk from the middle to see the actual content
lines = content.split('\n')
for i, line in enumerate(lines):
    if "AECCI" in line and i > 100:
        print("\n".join(lines[i:i+50]))
        break
