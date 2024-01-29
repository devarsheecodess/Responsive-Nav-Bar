let openNav = document.getElementById("openNav")
let closeNav = document.getElementById("closeNav")

openNav.addEventListener("click", ()=>{
        document.getElementById("mySidebar").style.width = "100%";
})

closeNav.addEventListener("click", ()=>{
        document.getElementById("mySidebar").style.width = "0px";
})