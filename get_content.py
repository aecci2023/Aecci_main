import urllib.request
import re

url = "https://www.aecci.org.in/about/about-chamber/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

# extract main content area if possible
match = re.search(r'<div data-elementor-type="wp-page".*?>(.*?)<footer', html, re.DOTALL)
if match:
    content = match.group(1)
    text = re.sub(r'<[^>]+>', '\n', content)
    text = re.sub(r'\n\s*\n', '\n', text).strip()
    print(text[:1000])
else:
    print("No match")
