// Маска телефона: +7 (999) 999-99-99
document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");

  phoneInput.addEventListener("input", function (e) {
    let x = phoneInput.value.replace(/\D/g, "").slice(0, 10);
    let formatted = "+7 ";

    if (x.length > 0) {
      formatted += "(" + x.slice(0, 3);
    }
    if (x.length >= 4) {
      formatted += ") " + x.slice(3, 6);
    }
    if (x.length >= 7) {
      formatted += "-" + x.slice(6, 8);
    }
    if (x.length >= 9) {
      formatted += "-" + x.slice(8, 10);
    }

    phoneInput.value = formatted;
  });
});