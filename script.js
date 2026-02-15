// ========================================
// SALAI CENTER - MAIN JAVASCRIPT
// ========================================

// 🔴 APNA DETAILS YAHAN DALO - UPDATED
const OWNER_WHATSAPP = "923003365632"; // Apna WhatsApp number (bina + ke)
const OWNER_EMAIL = "abcfiza18@gmail.com"; // Apna email

// ========================================
// SERVICES DATA
// ========================================
const services = [
  {
    icon: "fa-solid fa-tshirt",
    title: "Ladies Stitching",
    description: "Suit, Blouse, Kurti, Lehenga",
  },
  {
    icon: "fa-solid fa-user-tie",
    title: "Kids Stitching",
    description: "Shirt, Pant, Kurta, Sherwani",
  },
  {
    icon: "fa-solid fa-female",
    title: "Girls Course",
    description: "3 Months Training with Certificate",
  },
];

// ========================================
// PRICE LIST DATA
// ========================================
const prices = [
  { item: "👗 Suit (Full)", price: "1000" },
  { item: "👚 Blouse", price: "500" },
  { item: "👕 Shirt", price: "800" },
  { item: "👖 Pant", price: "300" },
  { item: "🧥 Kurta", price: "800" },
  { item: "🪡 Alteration", price: "300" },
];

// ========================================
// DOM ELEMENTS
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  // Load services
  loadServices();

  // Load price list
  loadPriceList();

  // ========================================
  // EVENT LISTENERS
  // ========================================

  // Mobile menu
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu) {
    mobileMenu.addEventListener("click", toggleMobileMenu);
  }

  // Book now button
  const bookNowBtn = document.getElementById("bookNowBtn");
  if (bookNowBtn) {
    bookNowBtn.addEventListener("click", function () {
      document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Services button
  const servicesBtn = document.getElementById("servicesBtn");
  if (servicesBtn) {
    servicesBtn.addEventListener("click", function () {
      document
        .getElementById("services")
        .scrollIntoView({ behavior: "smooth" });
    });
  }

  // Submit booking form
  const submitBtn = document.getElementById("submitBtn");
  if (submitBtn) {
    submitBtn.addEventListener("click", handleBookingSubmit);
  }

  // Nav links smooth scroll
  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");
      document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    });
  });

  // Social icons click
  document.querySelectorAll(".social-links i").forEach((icon) => {
    icon.addEventListener("click", function () {
      alert("Follow karein for latest updates!");
    });
  });
});

// ========================================
// LOAD SERVICES
// ========================================
function loadServices() {
  const servicesGrid = document.getElementById("servicesGrid");
  if (!servicesGrid) return;

  let html = "";
  services.forEach((service) => {
    html += `
            <div class="service-card">
                <i class="fas ${service.icon}"></i>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `;
  });

  servicesGrid.innerHTML = html;
}

// ========================================
// LOAD PRICE LIST
// ========================================
function loadPriceList() {
  const priceList = document.getElementById("priceList");
  if (!priceList) return;

  let html = "";
  prices.forEach((price) => {
    html += `
            <div class="price-item">
                <span>${price.item}</span>
                <strong>${price.price}</strong>
            </div>
        `;
  });

  priceList.innerHTML = html;
}

// ========================================
// HANDLE BOOKING SUBMIT
// ========================================
function handleBookingSubmit(e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  // Validation
  if (!name || !phone || !service) {
    alert("❌ Naam, Phone aur Service bharo");
    return;
  }

  // Phone number check (11 digit for Pakistan)
  if (phone.length < 11) {
    alert("❌ Sahi phone number daalo (11 digit)");
    return;
  }

  // Create booking object
  const booking = {
    id: Date.now(),
    name: name,
    phone: phone,
    service: service,
    message: message || "No message",
    timestamp: new Date().toLocaleString(),
    location: "Nushero Feroz",
  };

  // Show status
  showFormStatus("✅ Booking ho gayi! WhatsApp check karo...", "success");

  // Send WhatsApp notification
  const whatsappMsg =
    `🔔 *NEW BOOKING - SALAI CENTER* 🔔%0a%0a` +
    `👤 *Name:* ${name}%0a` +
    `📞 *Phone:* ${phone}%0a` +
    `📌 *Service:* ${service}%0a` +
    `💬 *Message:* ${message}%0a` +
    `📍 *Location:* Nushero Feroz%0a` +
    `⏰ *Time:* ${booking.timestamp}`;

  window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${whatsappMsg}`, "_blank");

  // Show success message
  alert(
    `✅ Booking confirm!\n${name} - ${service}\nWhatsApp par details bhej di`,
  );

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("service").value = "";
  document.getElementById("message").value = "";

  showFormStatus("✅ Done! WhatsApp bhej diya gaya", "success", 3000);
}

// ========================================
// SHOW FORM STATUS
// ========================================
function showFormStatus(message, type, timeout = 0) {
  const statusDiv = document.getElementById("formStatus");
  if (!statusDiv) return;

  statusDiv.style.display = "block";
  statusDiv.textContent = message;

  if (type === "success") {
    statusDiv.style.background = "#d4edda";
    statusDiv.style.color = "#155724";
  } else {
    statusDiv.style.background = "#f8d7da";
    statusDiv.style.color = "#721c24";
  }

  if (timeout > 0) {
    setTimeout(() => {
      statusDiv.style.display = "none";
    }, timeout);
  }
}

// ========================================
// TOGGLE MOBILE MENU
// ========================================
function toggleMobileMenu() {
  const nav = document.getElementById("navbar");
  if (nav) {
    nav.classList.toggle("show");
  }
}
