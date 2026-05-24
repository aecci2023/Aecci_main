import requests
from bs4 import BeautifulSoup

def fetch(url):
    print(f"Fetching {url}")
    res = requests.get(url)
    soup = BeautifulSoup(res.content, 'html.parser')

    # usually content is in some main tag or article or div with class elementor
    content = soup.find('main') or soup.find(id='main') or soup.find('div', class_='elementor')
    if not content:
        content = soup.body

    print(content.text[:500].strip())

fetch('https://www.aecci.org.in/why-aecci/')
