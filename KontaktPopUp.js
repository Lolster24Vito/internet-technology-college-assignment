function HideKontaktForm(){
    var element = document.getElementById("KontaktLightBoxContainer");
    element.classList.remove("active");
    element.classList.add("inactive");
}

function ShowKontaktForm(){
    var element = document.getElementById("KontaktLightBoxContainer");
    element.classList.remove("inactive");
    element.classList.add("active");
}