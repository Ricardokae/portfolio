/*===== MENU =====*/

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    toggleLink = document.querySelector('#nav-toggle i')

    if(toggle && nav){
        toggle.addEventListener('click', () =>{

            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active');

    //remove menu mobile
    const navMenu =document.querySelector('#nav-menu')
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//portfolio gallery

let filterContainer = document.querySelector("#gallery-filter");
let galleryItems = document.querySelectorAll("#gallery-item");


filterContainer.addEventListener("click", e =>{
    if(e.target.classList.contains("filter-item")){
        //deactivates existing active filter item
        filterContainer.querySelector(".active").classList.remove("active");
        //activates new filter item
        e.target.classList.add("active");


        let filterValue = e.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});