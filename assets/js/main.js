/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

// SHOW
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// HIDDEN
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

// function validate() {
//   var name = document.getElementById("name").value;
//   var subject = document.getElementById("subject").value;
//   var phone = document.getElementById("phone").value;
//   var email = document.getElementById("email").value;
//   var message = document.getElementById("message").value;
//   const form = document.getElementById("contactForm");
//   var text;
//   if (name.length < 5) {
//     text = "Please Enter valid Name";
//     alert(text);
//     return false;
//   }
//   if (isNaN(phone) || phone.length != 10) {
//     text = "Please Enter valid Phone Number";
//     alert(text);
//     return false;
//   }

//   if (email.indexOf("@") == -1 || email.length < 6) {
//     text = "Please Enter valid Email";
//     alert(text);
//     return false;
//   }

//   if (subject.length < 10) {
//     text = "Please Enter Correct Subject";
//     alert(text);
//     return false;
//   }

//   if (message.length <= 50) {
//     text = "Please Enter More Than 50 Characters";
//     alert(text);
//     return false;
//   }
//   alert("Form Submitted Successfully!");
//   form.reset();
//   return true;
// }
