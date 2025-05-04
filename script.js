const companies = [
  {
    name: "Systems Limited",
    description: "A pioneer in Pakistan’s tech sector, providing IT and BPO services globally.",
    website: "https://www.systemsltd.com"
  },
  {
    name: "NetSol Technologies",
    description: "Renowned for enterprise-grade financial tech solutions worldwide.",
    website: "https://www.netsoltech.com"
  },
  {
    name: "10Pearls",
    description: "Human-centric innovation and digital transformation partner.",
    website: "https://10pearls.com"
  },
  {
    name: "Afiniti",
    description: "AI-driven call routing platform that pairs agents and customers.",
    website: "https://www.afiniti.com"
  }
];

const grid = document.getElementById("companies");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const companyName = document.getElementById("companyName");
const companyDescription = document.getElementById("companyDescription");
const visitSiteBtn = document.getElementById("visitSiteBtn");

companies.forEach((company, index) => {
  const div = document.createElement("div");
  div.className = "company-card";
  div.innerHTML = `<h3>${company.name}</h3><p>${company.description.slice(0, 60)}...</p>`;
  div.addEventListener("click", () => showCompanyDetails(index));
  grid.appendChild(div);
});

function showCompanyDetails(index) {
  const company = companies[index];
  companyName.textContent = company.name;
  companyDescription.textContent = company.description;
  visitSiteBtn.onclick = () => {
    if (confirm("Do you want to visit the official website?")) {
      window.open(company.website, "_blank");
    }
  };
  popup.style.display = "block";
}

closePopup.onclick = () => {
  popup.style.display = "none";
};

window.onclick = function (e) {
  if (e.target === popup) popup.style.display = "none";
};
