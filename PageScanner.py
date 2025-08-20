import requests, time, unicodedata
from bs4 import BeautifulSoup

def remove_accents(text):
    return ''.join(
        c for c in unicodedata.normalize('NFD', text)
        if unicodedata.category(c) != 'Mn'
    )

base_url = "https://pares.mcu.es/MovimientosMigratorios/buscadorRaw.form?d=3602157&p={page}&objectsPerPage=25"
headers = {"User-Agent": "Mozilla/5.0"}

# 👇 Add all variations here
target_names = [
    "Carneado Noriega"
]

# Normalize each into word lists
target_word_sets = [
    [remove_accents(w.lower()) for w in name.split()]
    for name in target_names
]

found = False

for page in range(1, 4):
    url = base_url.format(page=page)
    response = requests.get(url, headers=headers)
    print(f"Scanning page {page}/3100... status: {response.status_code}")

    soup = BeautifulSoup(response.text, "html.parser")
    rows = soup.find_all("tr")

    for row in rows:
        cols = [col.get_text(strip=True) for col in row.find_all("td")]
        if cols:
            row_text = remove_accents(" ".join(c.lower() for c in cols))
            
            # Check each variation
            for words in target_word_sets:
                if all(word in row_text for word in words):
                    print(f"✅ Found match on page {page}: {cols}")
                    found = True
                    break
        if found:
            break
    if found:
        break

    time.sleep(1.5)

if not found:
    print("❌ No matches found for any of the given variations.")



