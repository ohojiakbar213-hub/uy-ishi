
const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !phone) {
    message.textContent = "Iltimos, barcha maydonlarni to‘ldiring.";
    return;
  }

  message.textContent =
    `Rahmat, ${name}! Ma’lumotlaringiz forma ichida qabul qilindi.`;

  form.reset();
});
