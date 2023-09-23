const listMenu = document.getElementById("nav-menu")
const container = document.getElementById("container") ;
const aboutBtn = document.getElementById("about") ;
const aboutPage = document.getElementById("aboutPage") ;

aboutBtn.addEventListener('click' , ()=>{
    console.log("knkljdflks") ;
    container.innerHTML = aboutPage.innerHTML ;
})


function validateName() {
    var name = document.getElementById("name").value;
    if (name.length === 0) {
      name.style.color = red;
      return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-za-z]*$/)) {
      nameError.innerHTML = "Write full name!";
      return false;
    }
    nameError.innerHTML = "Valid!";
    return true;
  }