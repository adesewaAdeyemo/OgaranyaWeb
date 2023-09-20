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
const delay = 1000;

$(".content").hide();
$("#dialog").hide();

$(document).ready(function () {
  setTimeout(function () {
    $(".content").removeClass("hidden");
    $(".content").slideDown(1000).fadeIn(10000);
  }, delay);

  $("#toggleform").click(function () {
    $("#dialog").hide();
  });

  $(".togglestartform").click(function () {
    $("#dialog").toggle();
  });

  $("#open").click(function () {
    $(this).hide();
    $("#close").show();
    $("#navbarText").show();
  });

  $("#close").click(function () {
    $(this).hide();
    $("#open").show();
    $("#navbarText").hide();
  });


});
