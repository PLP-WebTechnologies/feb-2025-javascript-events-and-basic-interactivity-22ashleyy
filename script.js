// 1. Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button was clicked!");
});

document.getElementById("colorBtn").addEventListener("click", function () {
  this.style.backgroundColor = this.style.backgroundColor === "green" ? "#3498db" : "green";
});

document.getElementById("hoverText").addEventListener("mouseover", () => {
  document.getElementById("hoverText").textContent = "You hovered over me!";
});

document.addEventListener("keypress", (e) => {
  document.getElementById("keyDisplay").textContent = `You pressed: ${e.key}`;
});

document.getElementById("secretAction").addEventListener("dblclick", () => {
  alert("🎉 You discovered the secret double-click!");
});

// 2. Interactive Elements
const images = [
  "https://via.placeholder.com/300?text=Image+1",
  "https://via.placeholder.com/300?text=Image+2",
  "https://via.placeholder.com/300?text=Image+3"
];
let currentImage = 0;
document.getElementById("nextImage").addEventListener("click", () => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("galleryImage").src = images[currentImage];
});

// Tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(tc => tc.classList.add("hidden"));
    document.getElementById(`tabContent${tab.dataset.tab}`).classList.remove("hidden");
  });
});

// 3. Form Validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  if (name === "" || email === "" || password === "") {
    message.textContent = "All fields are required!";
    message.style.color = "red";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message.textContent = "Invalid email format!";
    message.style.color = "red";
    return;
  }

  if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters!";
    message.style.color = "red";
    return;
  }

  message.textContent = "Success! 🎉 You're signed up.";
  message.style.color = "green";
});
