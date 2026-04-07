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
    name: "Geek Bar (Mango, Strawberry, Menthol, Apple, Blueberry)",
    price: 1250,
    category: "Vape",
    image: "Photos/2.png",
  },
  {
    id: 3,
    name: "Geek Bar (THC Oil)",
    price: 1350,
    category: "Vape",
    image: "Photos/3.png",
  },
  {
    id: 4,
    name: "Geek Bar (THC Oil)",
    price: 850,
    category: "Refill",
    image: "Photos/4.png",
  },
  {
    id: 5,
    name: "Geek Bar (Mango, Strawberry, Menthol, Apple, Blueberry)",
    price: 750,
    category: "Refill",
    image: "Photos/5.png",
  },
  {
    id: 6,
    name: "Bong with 5x Flavour 1q",
    price: 1399,
    category: "Bong",
    image: "Photos/6.png",
  },
  {
    id: 7,
    name: "Flavour 1q",
    price: 200,
    category: "Bong",
    image: "Photos/7.png",
  },
  {
    id: 8,
    name: "Weed Gummies",
    price: 800,
    category: "Exclusive Items",
    image: "Photos/8.png ",
  },
  {
    id: 9,
    name: "Brownies",
    price: 700,
    category: "Exclusive Items",
    image: "Photos/9.png",
  },
  {
    id: 10,
    name: "Penjamin",
    price: 800,
    category: "Exclusive Items",
    image: "Photos/10.png",
  },
  {
    id: 11,
    name: "5x Wild Haze",
    price: 1250,
    category: "Joint",
    image: "Photos/11.png",
  },
  {
    id: 12,
    name: "5x Bubble Berry",
    price: 999,
    category: "Joint",
    image: "Photos/GW.png",
  },
  {
    id: 13,
    name: "5x Northern Lights",
    price: 999,
    category: "Joint",
    image: "Photos/GW.png",
  },
  {
    id: 14,
    name: "5x Trainwreck",
    price: 999,
    category: "Joint",
    image: "Photos/GW.png",
  },
  {
    id: 15,
    name: "5x Gorilla Glue",
    price: 999,
    category: "Joint",
    image: "Photos/GW.png",
  },
  {
    id: 16,
    name: "5x OG Kush",
    price: 999,
    category: "Joint",
    image: "Photos/GW.png",
  },
  {
    id: 17,
    name: "5x Blue Dream",
    price: 999,
    category: "Joint",
    image: "Photos/GW.png",
  },
  {
    id: 18,
    name: "5x AK-47",
    price: 999,
    category: "Joint",
    image: "Photos/GW.png",
  },
  {
    id: 19,
    name: "5x Sour Dissel",
    price: 999,
    category: "Joint",
    image: "Photos/GW.png",
  },
  {
    id: 20,
    name: "1x Vape, 1x Penjamin & 3x Joint",
    price: 2500,
    category: "Bundle Deals",
    image: "Photos/20.png",
  },
  {
    id: 21,
    name: "2x Vapes & 3x Penjamins",
    price: 4399,
    category: "Bundle Deals",
    image: "Photos/21.png",
  },
  {
    id: 22,
    name: "5 Penjamins",
    price: 3000,
    category: "Bundle Deals",
    image: "Photos/22.png",
  },
  {
    id: 23,
    name: "Ganja Wallet",
    price: 499,
    category: "Accessories",
    image: "Photos/23.png",
  },
  {
    id: 24,
    name: "Dank Memer Lunch Box",
    price: 499,
    category: "Accessories",
    image: "Photos/24.png",
  },
];

const staffData = [
  {
    name: "Mr Judgment",
    designation: "Owner",
    image: "Photos/judge.png",
  },
  {
    name: "Sledge",
    designation: "SENIOR SALESMAN",
    image: "Photos/sledge.png",
  },
  {
    name: "Sakir Samir",
    designation: "SENIOR SALESMAN",
    image: "Photos/jun.jpg",
  },
  {
    name: "Lalu Mostan",
    designation: "SALESMAN",
    image: "Photos/lalu.png",
  },
  {
    name: "Atim Alu ",
    designation: "SALESMAN",
    image: "Photos/alu.png",
  },
  {
    name: "Ishan Adler ",
    designation: "SALESMAN",
    image: "Photos/ishan.png",
  },
  {
    name: "Raaz Ahmed",
    designation: "SALES Associate",
    image: "Photos/raz.png",
  },
  {
    name: "Nick Vercetti ",
    designation: "Sales Associate",
    image: "Photos/lalu.png",
  },
];
const vipCustomers = [
  {
    name: "Tyrone Biggums",
    memberSince: "20 March 2026 - 03 April 2026",
    cid: "932-4761 (896)",
    image:
      "https://media.discordapp.net/attachments/1484503108250898512/1484513808486502421/Desktop_Screenshot_2026.03.20_-_16.41.38.52.png?ex=69be80b8&is=69bd2f38&hm=f92769100ffb5bc070231047c74abacaf3636c738dc735d784bad6ebc16549eb&=&format=webp&quality=lossless",
  },
  {
    name: "Sweet Sins",
    memberSince: "20 March 2026 - 03 April 2026",
    cid: "482-7453 (912)",
    image:
      "https://images-ext-1.discordapp.net/external/3WvTFg0fL7-JLXiAlsehNQJR2x2_obxXJ55x1kxSGxc/https/i.postimg.cc/d0tFtdXM/pngtree-gold-crown-transparent-background-png-image-6536816.png?format=webp&quality=lossless",
  },
];

const galleryImages = ["Photos/g1.png", "Photos/g2.png"];

// ── POS Settings (edit these values) ──────────────────────────
const BILL_PIN = "6969"; // Change to your preferred manager PIN
const DISCORD_WEBHOOK =
  "https://discord.com/api/webhooks/1483165828701618259/4aJ4G1DwzjJOZZ2IUZHOUE_sRgErQRlZN927aeAoZfNmZgDFpJLaYx0oj3ZOpDl_DO4h";

const employees = [
  "Mr Judgment",
  "Sledge",
  "Raaz Ahmed",
  "Lalu Mostan",
  "Atim Alu ",
  "Nick Vercetti",
  "Ishan Adler",
  "Sakir Samir",
];
// ──────────────────────────────────────────────────────────────

const menuGrid = document.getElementById("menuGrid");
const searchInput = document.getElementById("searchInput");
const filterGroup = document.getElementById("filterGroup");
const staffGrid = document.getElementById("staffGrid");
const vipGrid = document.getElementById("vipGrid");
const galleryGrid = document.getElementById("galleryGrid");
const yearEl = document.getElementById("year");
const cartStatus = document.getElementById("cartStatus");
const cartItemsEl = document.getElementById("cartItems");
const subtotalAmountEl = document.getElementById("subtotalAmount");
const discountInput = document.getElementById("discountInput");
const discountAmountEl = document.getElementById("discountAmount");
const totalAmountEl = document.getElementById("totalAmount");
const clearCartBtn = document.getElementById("clearCartBtn");
const copyBillBtn = document.getElementById("copyBillBtn");
const quickDiscountButtons = document.getElementById("quickDiscountButtons");
const cartPanel = document.getElementById("cartPanel");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartTabBtn = document.getElementById("cartTabBtn");
const employeeSelect = document.getElementById("employeeSelect");
const pinOverlay = document.getElementById("pinOverlay");
const pinInput = document.getElementById("pinInput");
const pinError = document.getElementById("pinError");
const pinConfirmBtn = document.getElementById("pinConfirmBtn");
const pinCancelBtn = document.getElementById("pinCancelBtn");
const cardPopupOverlay = document.getElementById("cardPopupOverlay");
const cardPopupCloseBtn = document.getElementById("cardPopupCloseBtn");
const cardPopupMediaWrap = document.getElementById("cardPopupMediaWrap");
const cardPopupImage = document.getElementById("cardPopupImage");
const cardPopupTitle = document.getElementById("cardPopupTitle");
const cardPopupMeta = document.getElementById("cardPopupMeta");
const cardPopupText = document.getElementById("cardPopupText");

let activeCategory = "All";
let menuItems = [];
const cart = new Map();
let isCartOpen = false;
let scrollRevealObserver;

function formatPrice(price) {
  return `$${Number(price).toFixed(2)}`;
}

function renderMenu(items) {
  if (!items.length) {
    menuGrid.innerHTML =
      '<div class="card empty-state">No food items found.</div>';
    return;
  }

  const groupedItems = items.reduce((groups, item) => {
    const key = item.category || "Others";
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});

  menuGrid.innerHTML = Object.entries(groupedItems)
    .map(
      ([category, categoryItems]) => `
      <section class="catalog-category">
        <h4>${category}</h4>
        <div class="catalog-list">
          ${categoryItems
            .map(
              (item) => `
              <article class="catalog-item">
                ${
                  item.image
                    ? `<img class="catalog-item-image" src="${item.image}" alt="${item.name}" loading="lazy" />`
                    : `<div class="catalog-item-image placeholder">No image</div>`
                }
                <div class="catalog-item-top">
                  <p class="catalog-item-name">${item.name}</p>
                  <span class="catalog-item-price">${formatPrice(item.price)}</span>
                </div>
                <button type="button" class="add-item-btn" data-item-id="${item.id}" aria-label="Add ${item.name} to cart">+</button>
              </article>
            `,
            )
            .join("")}
        </div>
      </section>
    `,
    )
    .join("");

  animateCardReveal(menuGrid, ".catalog-item");
}

function animateCardReveal(container, selector) {
  const cards = container.querySelectorAll(selector);
  cards.forEach((card, index) => {
    card.classList.add("reveal-card");
    card.style.animationDelay = `${Math.min(index * 0.03, 0.28)}s`;
  });

  requestAnimationFrame(() => {
    cards.forEach((card) => {
      card.classList.add("visible");
    });
  });

  registerScrollReveal(container, selector);
}

function initScrollReveal() {
  if (scrollRevealObserver) return;

  scrollRevealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          scrollRevealObserver.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    },
  );
}

function registerScrollReveal(root = document, selector = ".scroll-reveal") {
  initScrollReveal();

  const elements = root.querySelectorAll ? root.querySelectorAll(selector) : [];

  elements.forEach((element, index) => {
    if (element.dataset.revealBound === "1") return;
    element.classList.add("scroll-reveal");
    element.style.transitionDelay = `${Math.min(index * 0.05, 0.22)}s`;
    element.dataset.revealBound = "1";
    scrollRevealObserver.observe(element);
  });
}

function calculateCartTotals() {
  let subtotal = 0;

  cart.forEach((quantity, id) => {
    const item = menuItems.find((menuItem) => menuItem.id === id);
    if (item) {
      subtotal += Number(item.price) * quantity;
    }
  });

  const discountPercent = Math.max(
    0,
    Math.min(100, Number.parseFloat(discountInput.value) || 0),
  );
  const discountAmount = subtotal * (discountPercent / 100);
  const total = subtotal - discountAmount;

  return { subtotal, discountAmount, total };
}

function renderCart() {
  const cartEntries = [];

  cart.forEach((quantity, id) => {
    const item = menuItems.find((menuItem) => menuItem.id === id);
    if (item) {
      cartEntries.push({ item, quantity });
    }
  });

  if (!cartEntries.length) {
    cartItemsEl.innerHTML = '<p class="cart-empty">No items added yet.</p>';
  } else {
    cartItemsEl.innerHTML = cartEntries
      .map(
        ({ item, quantity }) => `
      <article class="cart-line">
        <div class="cart-line-top">
          <p class="cart-line-name">${item.name}</p>
          <span class="cart-line-price">${formatPrice(item.price)}</span>
        </div>
        <div class="cart-line-bottom">
          <div class="qty-controls">
            <button type="button" class="qty-btn" data-action="decrease" data-item-id="${item.id}">-</button>
            <span class="qty-value">${quantity}</span>
            <button type="button" class="qty-btn" data-action="increase" data-item-id="${item.id}">+</button>
          </div>
          <strong>${formatPrice(Number(item.price) * quantity)}</strong>
        </div>
      </article>
    `,
      )
      .join("");
  }

  const { subtotal, discountAmount, total } = calculateCartTotals();
  subtotalAmountEl.textContent = formatPrice(subtotal);
  discountAmountEl.textContent = `-${formatPrice(discountAmount)}`;
  totalAmountEl.textContent = formatPrice(total);
  updateCartVisibility();
}

function getCartItemCount() {
  let totalItems = 0;
  cart.forEach((quantity) => {
    totalItems += quantity;
  });
  return totalItems;
}

function updateCartVisibility() {
  const hasItems = cart.size > 0;

  if (!hasItems) {
    isCartOpen = false;
  }

  cartPanel.classList.toggle("open", hasItems && isCartOpen);
  cartTabBtn.classList.toggle("visible", hasItems);
  cartTabBtn.textContent = `Cart (${getCartItemCount()})`;
}

function addItemToCart(itemId) {
  const wasEmpty = cart.size === 0;
  const currentQty = cart.get(itemId) || 0;
  cart.set(itemId, currentQty + 1);

  if (wasEmpty) {
    isCartOpen = true;
  }

  renderCart();
}

function updateItemQuantity(itemId, action) {
  const currentQty = cart.get(itemId) || 0;
  if (currentQty === 0) return;

  if (action === "increase") {
    cart.set(itemId, currentQty + 1);
  }

  if (action === "decrease") {
    if (currentQty === 1) {
      cart.delete(itemId);
    } else {
      cart.set(itemId, currentQty - 1);
    }
  }

  renderCart();
}

function buildBillText(employeeName) {
  const lines = [
    "Green Wonderland",
    "-------------------------",
    `Employee: ${employeeName}`,
    "",
    "Items Sold:",
  ];

  cart.forEach((quantity, id) => {
    const item = menuItems.find((menuItem) => menuItem.id === id);
    if (!item) return;
    const lineTotal = Number(item.price) * quantity;
    lines.push(`\u2022 ${item.name} x${quantity} = $${lineTotal.toFixed(2)}`);
  });

  const { subtotal, discountAmount, total } = calculateCartTotals();
  lines.push("-------------------------");
  if (discountAmount > 0) {
    lines.push(`Subtotal: $${subtotal.toFixed(2)}`);
    lines.push(`Discount: -$${discountAmount.toFixed(2)}`);
  }
  lines.push(`Total: $${total.toFixed(2)}`);

  return lines.join("\n");
}

function copyBillToClipboard() {
  if (!cart.size) {
    setStatus("Add at least one item before copying the bill.", true);
    return;
  }
  if (!employeeSelect.value) {
    setStatus("Please select an employee before copying the bill.", true);
    return;
  }
  openPinModal();
}

function openPinModal() {
  pinInput.value = "";
  pinError.textContent = "";
  pinOverlay.classList.add("open");
  setTimeout(() => pinInput.focus(), 50);
}

function closePinModal() {
  pinOverlay.classList.remove("open");
}

function openCardPopup({ title, meta, text, image, imageAlt }) {
  cardPopupTitle.textContent = title || "Details";
  cardPopupMeta.textContent = meta || "";
  cardPopupMeta.style.display = meta ? "block" : "none";
  cardPopupText.textContent = text || "";
  cardPopupText.style.display = text ? "block" : "none";

  if (image) {
    cardPopupImage.src = image;
    cardPopupImage.alt = imageAlt || title || "Card image";
    cardPopupMediaWrap.hidden = false;
  } else {
    cardPopupImage.removeAttribute("src");
    cardPopupImage.alt = "";
    cardPopupMediaWrap.hidden = true;
  }

  cardPopupOverlay.classList.add("open");
}

function closeCardPopup() {
  cardPopupOverlay.classList.remove("open");
}

async function handlePinConfirm() {
  if (pinInput.value !== BILL_PIN) {
    pinError.textContent = "Incorrect PIN. Please try again.";
    pinInput.value = "";
    pinInput.focus();
    return;
  }

  closePinModal();
  const employeeName = employeeSelect.value;
  const billText = buildBillText(employeeName);

  try {
    await navigator.clipboard.writeText(billText);
    setStatus("\u2713 Bill copied to clipboard.");
  } catch {
    setStatus("Clipboard copy failed. Please copy manually.", true);
  }

  await sendToDiscord(employeeName);
}

async function sendToDiscord(employeeName) {
  const lines = [
    "**\uD83D\uDED2 New Sale \u2014 Green Wonderland**",
    `**Employee: ${employeeName}**`,
    "",
    "**Items Sold:**",
  ];

  cart.forEach((quantity, id) => {
    const item = menuItems.find((mi) => mi.id === id);
    if (!item) return;
    const lineTotal = Number(item.price) * quantity;
    lines.push(`\u2022 ${item.name} x${quantity} = $${lineTotal.toFixed(2)}`);
  });

  const { subtotal, discountAmount, total } = calculateCartTotals();
  lines.push("");
  if (discountAmount > 0) {
    lines.push(`Subtotal: $${subtotal.toFixed(2)}`);
    lines.push(`Discount: -$${discountAmount.toFixed(2)}`);
  }
  lines.push(`**Total: $${total.toFixed(2)}**`);

  try {
    await fetch(DISCORD_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: lines.join("\n"), username: "GW POS" }),
    });
  } catch {
    // Webhook failure is non-critical; bill is already copied.
  }
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

function renderEmployees() {
  employees.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    employeeSelect.appendChild(option);
  });
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

  animateCardReveal(staffGrid, ".staff-card");
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function renderVipCustomers() {
  vipGrid.innerHTML = vipCustomers
    .map(
      (customer) => `
      <article class="card vip-card">
        <div class="vip-top">
          ${
            customer.image
              ? `<img class="vip-avatar" src="${customer.image}" alt="${customer.name}" loading="lazy" />`
              : `<div class="vip-initial" aria-hidden="true">${getInitials(customer.name)}</div>`
          }
          <h3 class="vip-name">${customer.name}</h3>
        </div>
        <p class="CID">CID & Phone Number: ${customer.cid}</p>
        <p class="vip-since">Membership ${customer.memberSince}</p>
      </article>
    `,
    )
    .join("");

  animateCardReveal(vipGrid, ".vip-card");
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

  animateCardReveal(galleryGrid, ".gallery-card");
}

function setStatus(message, isError = false) {
  cartStatus.textContent = message;
  cartStatus.style.color = isError ? "#a63f2e" : "#6f655e";
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

  menuGrid.addEventListener("click", (event) => {
    const addButton = event.target.closest(".add-item-btn");
    if (addButton) {
      addItemToCart(Number(addButton.dataset.itemId));
      return;
    }

    const card = event.target.closest(".catalog-item");
    if (!card) return;

    const name = card.querySelector(".catalog-item-name")?.textContent?.trim();
    const price = card
      .querySelector(".catalog-item-price")
      ?.textContent?.trim();
    const image = card
      .querySelector(".catalog-item-image:not(.placeholder)")
      ?.getAttribute("src");

    openCardPopup({
      title: name || "Item",
      meta: price || "",
      text: "Tap + to add this item to the cart.",
      image,
      imageAlt: name || "Catalog image",
    });
  });

  staffGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".staff-card");
    if (!card) return;

    const name = card.querySelector("h3")?.textContent?.trim();
    const designation = card.querySelector("p")?.textContent?.trim();
    const image = card.querySelector("img")?.getAttribute("src");

    openCardPopup({
      title: name || "Staff",
      meta: designation || "",
      text: "Part of the Green Wonderland team.",
      image,
      imageAlt: name || "Staff image",
    });
  });

  vipGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".vip-card");
    if (!card) return;

    const name = card.querySelector(".vip-name")?.textContent?.trim();
    const since = card.querySelector(".vip-since")?.textContent?.trim();
    const image = card.querySelector(".vip-avatar")?.getAttribute("src");

    openCardPopup({
      title: name || "VIP Customer",
      meta: since || "",
      text: "A valued member of Green Wonderland.",
      image,
      imageAlt: name || "VIP image",
    });
  });

  galleryGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".gallery-card");
    if (!card) return;

    const imageEl = card.querySelector("img");
    const image = imageEl?.getAttribute("src");
    const alt = imageEl?.getAttribute("alt") || "Gallery image";

    openCardPopup({
      title: "Gallery",
      meta: "Green Wonderland",
      text: alt,
      image,
      imageAlt: alt,
    });
  });

  cartItemsEl.addEventListener("click", (event) => {
    const qtyButton = event.target.closest(".qty-btn");
    if (!qtyButton) return;

    const itemId = Number(qtyButton.dataset.itemId);
    const action = qtyButton.dataset.action;
    updateItemQuantity(itemId, action);
  });

  discountInput.addEventListener("input", () => {
    renderCart();
  });

  quickDiscountButtons.addEventListener("click", (event) => {
    const discountButton = event.target.closest("button[data-discount]");
    if (!discountButton) return;

    discountInput.value = discountButton.dataset.discount;
    renderCart();
  });

  clearCartBtn.addEventListener("click", () => {
    cart.clear();
    renderCart();
  });

  closeCartBtn.addEventListener("click", () => {
    isCartOpen = false;
    updateCartVisibility();
  });

  cartTabBtn.addEventListener("click", () => {
    if (!cart.size) return;
    isCartOpen = !isCartOpen;
    updateCartVisibility();
  });

  copyBillBtn.addEventListener("click", copyBillToClipboard);

  pinConfirmBtn.addEventListener("click", handlePinConfirm);
  pinCancelBtn.addEventListener("click", closePinModal);
  pinOverlay.addEventListener("click", (event) => {
    if (event.target === pinOverlay) closePinModal();
  });
  pinInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") handlePinConfirm();
    if (event.key === "Escape") closePinModal();
  });

  cardPopupCloseBtn.addEventListener("click", closeCardPopup);
  cardPopupOverlay.addEventListener("click", (event) => {
    if (event.target === cardPopupOverlay) closeCardPopup();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePinModal();
      closeCardPopup();
    }
  });
}

function bootAnimations() {
  requestAnimationFrame(() => {
    document.body.classList.add("page-ready");
  });

  registerScrollReveal(
    document,
    ".section-heading, .menu-controls, .employee-bar, .about-card, .contact-grid .card",
  );
}

async function loadMenu() {
  const localMenu = localStorage.getItem("restaurantMenu");
  if (localMenu) {
    menuItems = JSON.parse(localMenu);
    return;
  }

  try {
    const response = await fetch("menu.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Unable to load menu.json");
    }

    menuItems = await response.json();
  } catch (error) {
    menuItems = DEFAULT_MENU;
  }
}

async function init() {
  yearEl.textContent = new Date().getFullYear();
  bootAnimations();
  renderEmployees();
  renderStaff();
  renderVipCustomers();
  renderGallery();
  bindEvents();
  await loadMenu();
  applyFilters();
  renderCart();
}

init();
