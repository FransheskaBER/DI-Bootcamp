// ------------ LIVE SITE ---------------
const manageBtn = document.getElementById("manage-faqs");
const publishTable = document.getElementById("published-faqs-table");
const publishFaqTableBody = publishTable.querySelector("tbody");
const searchInput = document.getElementById("faq-search");
const categoryFilter = document.getElementById("faq-category-filter");

document.addEventListener('DOMContentLoaded', () => {
    loadPublishedFaqs().catch((err) => {
      console.error('Failed to load published FAQs:', err);
      // optionally show a simple message in the published table
    });
});

// ------------ LIVE SITE ---------------
manageBtn.addEventListener("click", () => {
    window.location.href = 'index.html';
});

let publishedFaqs = [];

async function loadPublishedFaqs() {
  const res = await fetch('/faqs/published');
  publishedFaqs = await res.json();
  const categories = new Set(publishedFaqs.map((faq) => faq.category));
  populateFilterOption(categories)
  renderPublishedRows(publishedFaqs);
}

function renderPublishedRows(faqs){
    publishFaqTableBody.innerHTML = "";
    const fragment = document.createDocumentFragment();

    faqs.forEach((faq, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${faq.question}</td>
        <td>${faq.answer}</td>
        <td>${faq.category}</td>
        `;
        fragment.appendChild(row);
    });

    publishFaqTableBody.appendChild(fragment);
}

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const term = searchInput.value.trim().toLowerCase();
    const filtered = term
      ? publishedFaqs.filter((faq) =>
          `${faq.question} ${faq.answer}`.toLowerCase().includes(term)
        )
      : publishedFaqs;

    renderPublishedRows(filtered);
  });
}

function populateFilterOption(categories){
    if (!categoryFilter) return;
    categoryFilter.innerHTML = '<option value="">All categories</option>';

    categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    categoryFilter.addEventListener('change', () => {
        const selected = categoryFilter.value;
        const visibleFaqs = selected ? publishedFaqs.filter((faq) => faq.category === selected) : publishedFaqs;
        renderPublishedRows(visibleFaqs);
    });
}