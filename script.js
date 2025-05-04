// Replace this with a real fetch call to Google Sheets if needed.
const companies = [
  {
    name: "Systems Limited",
    description: "Leading IT and BPO services provider in Pakistan.",
    website: "https://www.systemsltd.com"
  },
  {
    name: "NetSol Technologies",
    description: "Enterprise IT solutions provider with a focus on finance and leasing.",
    website: "https://www.netsoltech.com"
  },
  {
    name: "10Pearls",
    description: "Global tech company focused on digital transformation and AI.",
    website: "https://10pearls.com"
  },
  {
    name: "Afiniti",
    description: "Uses AI to pair customers and agents in call centers.",
    website: "https://www.afiniti.com"
  }
];

const listContainer = document.getElementById("companies");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const companyName = document.getElementById("companyName");
const companyDescription = document.getElementById("companyDescription");
const visitSiteBtn = document.getElementById("visitSiteBtn");

companies.forEach((company, index) => {
  const li = document.createElement("li");
  li.textContent = company.name;
  li.addEventListener("click", () => showCompanyDetails(index));
  listContainer.appendChild(li);
});

function showCompanyDetails(index) {
  const company = companies[index];
  companyName.textContent = company.name;
  companyDescription.textContent = company.description;
  visitSiteBtn.onclick = () => {
    const confirmVisit = confirm("Do you want to visit the official website?");
    if (confirmVisit) {
      window.open(company.website, "_blank");
    }
  };
  popup.style.display = "block";
}

closePopup.onclick = () => {
  popup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};
