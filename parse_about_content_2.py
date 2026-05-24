import urllib.request
import re

url = "https://www.aecci.org.in/about/about-chamber/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

html = re.sub(r'<script.*?</script>', '', html, flags=re.DOTALL)
html = re.sub(r'<style.*?</style>', '', html, flags=re.DOTALL)

# Keep some basic tags for context
html = re.sub(r'</?(div|span|header|footer|nav|ul|li|a|img|figure)[^>]*>', '\n', html)
text = re.sub(r'<[^>]+>', '\n', html)
text = re.sub(r'\n\s*\n', '\n', text).strip()

lines = text.split('\n')
for i, line in enumerate(lines):
    if "ABOUT AECCI" in line.upper() or "WHO WE ARE" in line.upper() or "VISION" in line.upper():
        print("\n".join(lines[max(0, i-5):i+50]))
        break
