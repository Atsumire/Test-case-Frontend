const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", maskPhone);
phoneInput.addEventListener("focus", maskPhone);
phoneInput.addEventListener("blur", maskPhone);

function maskPhone(e) {
  let keyCode;
  if (e.keyCode) keyCode = e.keyCode;

  let pos = phoneInput.selectionStart;
  if (pos < 3) e.preventDefault();

  let matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = phoneInput.value.replace(/\D/g, ""),
      newValue = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) : a;
      });

  i = newValue.indexOf("_");
  if (i !== -1) {
    newValue = newValue.slice(0, i);
  }

  let reg = new RegExp("^" + matrix
    .substr(0, phoneInput.value.length)
    .replace(/_+/g, "\\d{1," + "$&".length + "}")
    .replace(/[+()]/g, "\\$&") + "$");

  if (!reg.test(phoneInput.value) || phoneInput.value.length < 5 || keyCode > 47 && keyCode < 58) {
    phoneInput.value = newValue;
  }

  if (e.type === "blur" && phoneInput.value.length < 17) {
    phoneInput.value = "";
  }
}

// === Валидация формы ===
const form = document.getElementById("contact-form");
const messageArea = document.getElementById("message-area");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // предотвращаем отправку формы

  const name = document.getElementById("name").value.trim();
  const phone = phoneInput.value.trim();

  if (name === "" || phone.length !== 18) {
    alert("Пожалуйста, заполните имя и корректный номер телефона.");
    return;
  }

  messageArea.style.display = "block";
});