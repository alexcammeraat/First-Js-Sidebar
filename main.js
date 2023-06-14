let toggleNav = function(){ //anonymous function
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a"); // all at the end of querySelector to be able to select all the anchor tags. otherwise it will only select the first one.

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px"; 
        getSidebarTitle.style.opacity = "0.5";

        let arrayLenght = getSidebarLinks.lenght; 
        for (let i = 0; i < arrayLenght; i++){
            getSidebarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true
    }
}