let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
menu.onclick= () =>{
    menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}
let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}


window.onscroll = () =>{
    menu.classList.remove('fa-times');
   navbar.classList.remove('active');
   themeToggler.classList.remove('active');
}


document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {
  btn.onclick = () => {
      let color = getComputedStyle(btn).backgroundColor;
      document.querySelector(':root').style.setProperty('--main-color', color);
  };
});
var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 10,
      slideShadows: true,
    },
   loop:true,
   autoplay:{
    delay:3000,
    disableOnInteraction:false,
   },
  });
  
  var swiper = new Swiper(".review-slider", {
    slidesPerView:1,
    grabCursor: true,
   loop:true,
   spaceBetween: 10,
   breakpoints:{
    0: {
      slidesPerView:1,
    },
    700: {
      slidesPerView:2,
    },
    1050: {
      slidesPerView:3,
    },
   },
   autoplay:{
    delay:5000,
    disableOnInteraction:false,
   }
  });
  


 

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting by default

  // Reset previous error messages
  clearErrors();

  // Get form input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var number = document.getElementById("number").value;

  // Perform validation checks
  var isValid = true;

  if (name.trim() === "") {
      displayError("nameError", "Please enter your name.");
      isValid = false;
  }

  if (!isValidEmail(email)) {
      displayError("emailError", "Please enter a valid email address.");
      isValid = false;
  }

  if (subject.trim() === "") {
      displayError("subjectError", "Please enter a subject.");
      isValid = false;
  }

  if (message.trim() === "") {
      displayError("messageError", "Please enter your message.");
      isValid = false;
  }

  if (number.trim() === "") {
      displayError("numberError", "Please enter your phone number.");
      isValid = false;
  }

  // If all checks pass, you can submit the form or perform further actions
  if (isValid) {
      // You can submit the form or perform additional actions here
      // For now, let's submit the form to process_form.php
      document.getElementById("contactForm").submit();
  }
});

function isValidEmail(email) {
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

function displayError(elementId, errorMessage) {
  document.getElementById(elementId).textContent = errorMessage;
}

function clearErrors() {
  var errorElements = document.getElementsByClassName("error");
  for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = "";
  }
}
