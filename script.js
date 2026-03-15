const DEFAULT_MENU = [
  {
    id: 1,
    name: "Geek Bar",
    price: 1150,
    category: "Vape",
    image: "Photos/geek bar.jpg",
  },
  {
    id: 2,
    name: "Geek Bar (Flavour)",
    price: 1250,
    category: "Vape",
    image: "",
  },
  {
    id: 3,
    name: "Geek Bar (THC Oil)",
    price: 1350,
    category: "Vape",
    image: "",
  },
  {
    id: 4,
    name: "Geek Bar (THC)",
    price: 850,
    category: "Vape",
    image: "",
  },
  {
    id: 5,
    name: "Geek Bar (Mango, Strawberry, Menthol, Apple, Blueberry)",
    price: 1150,
    category: "Vape",
    image: "",
  },
  {
    id: 6,
    name: "Bong with 5x Flavour 1q",
    price: 1399,
    category: "Bong",
    image: "",
  },
  {
    id: 7,
    name: "Flavour 1q",
    price: 200,
    category: "Bong",
    image: "",
  },
  {
    id: 8,
    name: "Weed Gummies",
    price: 800,
    category: "Exclusive Items",
    image: "",
  },
  {
    id: 9,
    name: "Brownies",
    price: 700,
    category: "Exclusive Items",
    image: "",
  },
  {
    id: 10,
    name: "Penjamin",
    price: 800,
    category: "Exclusive Items",
    image: "",
  },
  {
    id: 11,
    name: "5x Wild Haze",
    price: 1250,
    category: "Joint",
    image: "",
  },
  {
    id: 12,
    name: "5x Bubble Berry",
    price: 999,
    category: "Joint",
    image: "",
  },
  {
    id: 13,
    name: "5x Northern Lights",
    price: 999,
    category: "Joint",
    image: "",
  },
  {
    id: 14,
    name: "5x Trainwreck",
    price: 999,
    category: "Joint",
    image: "",
  },
  {
    id: 15,
    name: "5x Gorilla Glue",
    price: 999,
    category: "Joint",
    image: "",
  },
  {
    id: 16,
    name: "5x OG Kush",
    price: 999,
    category: "Joint",
    image: "",
  },
  {
    id: 17,
    name: "5x Blue Dream",
    price: 999,
    category: "Joint",
    image: "",
  },
  {
    id: 18,
    name: "5x AK-47",
    price: 999,
    category: "Joint",
    image: "",
  },
  {
    id: 19,
    name: "5x Sour Dissel",
    price: 999,
    category: "Joint",
    image: "",
  },
  {
    id: 20,
    name: "1x Vape, 1x Penjamin & 3x Joint",
    price: 2500,
    category: "Bundle Deals",
    image: "",
  },
  {
    id: 21,
    name: "2x Vapes & 3x Penjamins",
    price: 4399,
    category: "Bundle Deals",
    image: "",
  },
  {
    id: 22,
    name: "5 Penjamins",
    price: 3000,
    category: "Bundle Deals",
    image: "",
  },
  {
    id: 23,
    name: "Ganja Wallet",
    price: 499,
    category: "Accessories",
    image: "",
  },
  {
    id: 24,
    name: "Dank Memer Lunch Box",
    price: 499,
    category: "Accessories",
    image: "",
  },
];

const staffData = [
  {
    name: "Mr JoJo",
    designation: "Owner",
    image: "Photos/owner.jpg",
  },
  {
    name: "Sledge",
    designation: "Manager",
    image: "Photos/Manager.png",
  },
  {
    name: "Mia Johnson",
    designation: "Restaurant Manager",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Noah Smith",
    designation: "Beverage Specialist",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=700&q=80",
  },
];

const galleryImages = ["Photos/g1.png", "Photos/g2.png"];

const menuGrid = document.getElementById("menuGrid");
const searchInput = document.getElementById("searchInput");
const filterGroup = document.getElementById("filterGroup");
const staffGrid = document.getElementById("staffGrid");
const galleryGrid = document.getElementById("galleryGrid");
const yearEl = document.getElementById("year");
const menuJsonEditor = document.getElementById("menuJsonEditor");
const saveMenuBtn = document.getElementById("saveMenuBtn");
const resetMenuBtn = document.getElementById("resetMenuBtn");
const adminStatus = document.getElementById("adminStatus");

let activeCategory = "All";
let menuItems = [];
let defaultJsonText = "";

function formatPrice(price) {
  return `$${Number(price).toFixed(2)}`;
}

function renderMenu(items) {
  if (!items.length) {
    menuGrid.innerHTML =
      '<div class="card empty-state">No food items found.</div>';
    return;
  }

  menuGrid.innerHTML = items
    .map(
      (item) => `
      <article class="card food-card">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        <div class="food-content">
          <div class="food-top">
            <h3>${item.name}</h3>
            <span class="price">${formatPrice(item.price)}</span>
          </div>
          <span class="category">${item.category}</span>
        </div>
      </article>
    `,
    )
    .join("");
}

function applyFilters() {
  const term = searchInput.value.trim().toLowerCase();

  const filtered = menuItems.filter((item) => {
    const matchCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchText = item.name.toLowerCase().includes(term);
    return matchCategory && matchText;
  });

  renderMenu(filtered);
}

function renderStaff() {
  staffGrid.innerHTML = staffData
    .map(
      (member) => `
      <article class="card staff-card">
        <img src="${member.image}" alt="${member.name}" loading="lazy" />
        <div class="staff-content">
          <h3>${member.name}</h3>
          <p>${member.designation}</p>
        </div>
      </article>
    `,
    )
    .join("");
}

function renderGallery() {
  galleryGrid.innerHTML = galleryImages
    .map(
      (image, index) => `
      <article class="card gallery-card">
        <img src="${image}" alt="Food gallery image ${index + 1}" loading="lazy" />
      </article>
    `,
    )
    .join("");
}

function setStatus(message, isError = false) {
  adminStatus.textContent = message;
  adminStatus.style.color = isError ? "#a63f2e" : "#6f655e";
}

function saveCustomMenu() {
  try {
    const parsed = JSON.parse(menuJsonEditor.value);
    if (!Array.isArray(parsed)) {
      throw new Error("JSON must be an array of menu items.");
    }

    localStorage.setItem("restaurantMenu", JSON.stringify(parsed));
    menuItems = parsed;
    applyFilters();
    setStatus("Menu JSON saved successfully.");
  } catch (error) {
    setStatus(error.message, true);
  }
}

function resetToDefaultMenu() {
  localStorage.removeItem("restaurantMenu");
  menuItems = JSON.parse(defaultJsonText);
  menuJsonEditor.value = defaultJsonText;
  applyFilters();
  setStatus("Menu reset to default data.");
}

function bindEvents() {
  searchInput.addEventListener("input", applyFilters);

  filterGroup.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;

    filterGroup.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.toggle("active", btn === button);
    });

    applyFilters();
  });

  saveMenuBtn.addEventListener("click", saveCustomMenu);
  resetMenuBtn.addEventListener("click", resetToDefaultMenu);
}

async function loadMenu() {
  const localMenu = localStorage.getItem("restaurantMenu");
  if (localMenu) {
    menuItems = JSON.parse(localMenu);
    defaultJsonText = JSON.stringify(DEFAULT_MENU, null, 2);
    menuJsonEditor.value = JSON.stringify(menuItems, null, 2);
    return;
  }

  try {
    const response = await fetch("menu.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Unable to load menu.json");
    }

    menuItems = await response.json();
    defaultJsonText = JSON.stringify(menuItems, null, 2);
  } catch (error) {
    menuItems = DEFAULT_MENU;
    defaultJsonText = JSON.stringify(DEFAULT_MENU, null, 2);
  }

  menuJsonEditor.value = JSON.stringify(menuItems, null, 2);
}

async function init() {
  yearEl.textContent = new Date().getFullYear();
  renderStaff();
  renderGallery();
  bindEvents();
  await loadMenu();
  applyFilters();
}

init();
