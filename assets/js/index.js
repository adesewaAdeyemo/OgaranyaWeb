showdetail("invoicedetail");
function showdetail(formId) {
  const forms = document.querySelectorAll(".detail");

  forms.forEach((form) => {
    form.style.display = "none";
  });
  const selected = document.getElementById(formId);
  const selectedimg = document.getElementById(formId + "Img");
  if (selected) {
    selected.style.display = "block";
    selectedimg.style.display = "block";
  }
}

showflexdetail("buy");
function showflexdetail(formId) {
  const forms = document.querySelectorAll(".usedetail");
  const btns = document.querySelectorAll(".spanbtn");

  forms.forEach((form) => {
    form.style.display = "none";
  });
  btns.forEach((btn) => {
    btn.classList.remove("custom-btn-bg");
  });
  const selected = document.getElementById(formId);
  const clickedbtn = document.getElementById(formId + 'btn');
  if (selected) {
    selected.style.display = "block";
    clickedbtn.classList.add("custom-btn-bg");
  }
}

const collapse = document.getElementById("navbarText");
const togglebtn = document.getElementById("open");
const togleclose = document.getElementById("close");
togglebtn.addEventListener("click", () => {
  togglebtn.style.display = "none";
  togleclose.style.display = "block";
  collapse.style.display = "block";
});
togleclose.addEventListener("click", () => {
  togleclose.style.display = "none";
  togglebtn.style.display = "block";
  collapse.style.display = "none";
});
