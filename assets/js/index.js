// Business - Individual
showdetail("invoicedetail");
function showdetail(formId) {
  const forms = document.querySelectorAll(".detail");

  forms.forEach((form) => {
    form.style.opacity = 0;
    form.style.pointerEvents = "none";
    form.style.display = "none";
  });
  const selected = document.getElementById(formId);
  const selectedimg = document.getElementById(formId + "Img");
  if (selected) {
    selected.style.display = "block";
    selectedimg.style.display = "block";
    setTimeout(() => {
      selected.style.opacity = 1;
      selectedimg.style.opacity = 1;
    }, 30);
  }
}
  
// what you use us for
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
  const clickedbtn = document.getElementById(formId + "btn");
  if (selected) {
    selected.style.display = "block";
    clickedbtn.classList.add("custom-btn-bg");
  }
}
const delay = 1000;

$(".content").hide();
$("#dialog").hide();

$(document).ready(function () {
  // content preserve space
  setTimeout(function () {
    $(".content").removeClass("hidden");
    $(".content").removeClass("hiddden");
    $(".content").slideDown(1000).fadeIn(10000);
  }, delay);

  // pop up form for "Get started"
  $("#toggleform").click(function () {
    $("#dialog").hide();
  });

  $(".togglestartform").click(function () {
    $("#dialog").toggle();
  });

  // navbar toggle for mobile
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

  // calculator
  $("#inputValue").on("input", function () {
    const inputValue = parseFloat($(this).val());
    if (!isNaN(inputValue)) {
      let Value = inputValue - inputValue * 0.02;
      let reconcileValue = inputValue - Value;

      if (reconcileValue > 2000) {
        reconcileValue = 2000;
        Value = inputValue - reconcileValue;
      }
      if (reconcileValue < 100) {
        reconcileValue = 100;
        Value = inputValue - reconcileValue;
      }
      $("#result").text(Value.toFixed(2));
      $("#interest").text(reconcileValue.toFixed(2));
    } else {
      $("#result").text("0.00");
    }
  });
});
