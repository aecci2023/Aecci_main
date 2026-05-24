import urllib.request
import re
from bs4 import BeautifulSoup

def fetch_and_parse(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        html = re.sub(r'<script.*?</script>', '', html, flags=re.DOTALL)
        html = re.sub(r'<style.*?</style>', '', html, flags=re.DOTALL)
        text = re.sub(r'<[^>]+>', ' ', html)
        text = re.sub(r'\s+', ' ', text).strip()
        return text
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

urls = {
    "AboutChamber": "https://www.aecci.org.in/about/about-chamber/",
    "OurHistory": "https://www.aecci.org.in/about/our-history/",
    "ChairmanMessage": "https://www.aecci.org.in/about/chairman-message/"
}

for name, url in urls.items():
    print(f"\n--- {name} ---")
    content = fetch_and_parse(url)
    if content:
        # Just print a snippet
        print(content[:500])
