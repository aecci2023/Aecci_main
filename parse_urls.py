import urllib.request
import re

urls = {
    "AboutChamber": "https://www.aecci.org.in/about/about-chamber/",
    "OurHistory": "https://www.aecci.org.in/about/our-history/",
    "ChairmanMessage": "https://www.aecci.org.in/about/chairman-message/",
    "ChamberPolicy": "https://www.aecci.org.in/about/chamber-policy/",
    "OfficeBearers": "https://www.aecci.org.in/office-bearers-3/",
    "RolesResponsibility": "https://www.aecci.org.in/about/roles-responsibility/",
    "StrategicPartners": "https://www.aecci.org.in/strategic-partners/",
    "ChamberDynamics": "https://www.aecci.org.in/about/chamber-dynamics/",
    "JobOpportunities": "https://www.aecci.org.in/about/jobs-opportunities/"
}

for name, url in urls.items():
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'<div data-elementor-type="wp-page".*?>(.*?)<footer', html, re.DOTALL)
        if match:
            content = match.group(1)
            text = re.sub(r'<[^>]+>', '\n', content)
            text = re.sub(r'\n\s*\n', '\n', text).strip()
            with open(f"{name}.txt", "w") as f:
                f.write(text)
            print(f"Saved {name}.txt")
    except Exception as e:
        print(e)
