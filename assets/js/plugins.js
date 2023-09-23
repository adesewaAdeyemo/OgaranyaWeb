// Language Translator
// window.googleTranslateElementInit = () => {
//   new google.translate.TranslateElement(
//     {
//       pageLanguage: "en",
//       layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
//       includedLanguages: "en,ha,ig,yo,pcm",
//     },
//     "google_translate_element"
//   );
// };
// if (!window.google || !window.google.translate) {
//   const script = document.createElement("script");
//   script.src =
//     "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//   document.head.appendChild(script);
// } else {
//   window.googleTranslateElementInit();
// }



// google manager
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-TNTJDBRT4L");

// catapcha
let url = window.location;
let value = url.toString().split("/").pop();

grecaptcha.ready(function () {
  grecaptcha
    .execute("6LdRaywfAAAAAJBnKYIBc9Prv5nm2hX9izKlvUcE", { action: "homepage" })
    .then(function (token) {
      //var response = document.getElementById('v1-response');
      // response.value = token;
    });
});

// contact
$(document).ready(function () {
  let isContact = localStorage.getItem("isContact");

  if (!isContact) {
    $("#contact-modal").modal("show");
  }

  var url = window.location.search;
  let locations = window.location;

  var queryParams = new URLSearchParams(url);

  if (queryParams.has("error")) {
    url = url.replace("?error=", ""); // remove the ?
    if (!alert(url)) {
      window.location = locations.toString().replace("?error=", "");
    }
  }

  if (queryParams.has("ok")) {
    $("#contact-modal").modal("hide");
    if (!alert("Message sent successfully")) {
      window.location = locations.toString().replace("?ok=1", "");
      localStorage.setItem("isContact", 1);
    }
  }
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
    {
        pageLanguage: "en",
        includedLanguages: "yo,ha,ig,en",
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
    },
    "google_translate_element"
    );

    var removePopup = document.getElementById("goog-gt-tt");
    removePopup.parentNode.removeChild(removePopup);
}



var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/60ba4643de99a4282a1b6c5b/1f7bq4v0d';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();


$(document).ready(function(){
$('.close.contact').click(function(){
 localStorage.setItem("isContact", 1); 
a = new Date(new Date().getTime() +1000*60*60*24*365);
document.cookie = 'contact="ogaranya"; expires='+a.toGMTString()+';'; 
})

});

