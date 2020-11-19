const showhome = () => {
    document.getElementById("Home").style.display = "block";
    document.getElementById("Contact").style.display = "none";
}

const showcontact = () =>{
    document.getElementById("Home").style.display = "none";
    document.getElementById("Contact").style.display = "block";
}



window.onload = showhome;