document.querySelector(".lightContainer").onclick = function () {
    document.querySelector(".lightStatus").classList.toggle("lightStatus__active")
    if (document.querySelector(".lightStatus").classList.contains("lightStatus__active")) {
        document.querySelector(".lightStatus__text").textContent = "ON";
        document.querySelector(".wrap").style.backgroundColor = "#fff";
        $(".burger div").css("backgroundColor", "#333");
        $(".text").css("color", "#333");
        $("#textColor").text("#333");
        localStorage.setItem("color", "#333");
        localStorage.setItem("blackgroundColor", "#fff");
        localStorage.setItem("switcherText", document.querySelector(".lightStatus__text").textContent);
        localStorage.setItem("switcherStatus", document.querySelector(".lightStatus").classList);
    } else {
        document.querySelector(".lightStatus__text").textContent = "OFF";
        document.querySelector(".wrap").style.backgroundColor = "#333";
        $(".burger div").css("backgroundColor", "#fff");
        $(".text").css("color", "#fff");
        $("#textColor").text("#fff");
        localStorage.setItem("blackgroundColor", "#333");
        localStorage.setItem("color", "#fff");
        localStorage.setItem("switcherText", document.querySelector(".lightStatus__text").textContent);
        localStorage.setItem("switcherStatus", document.querySelector(".lightStatus").classList);
    }
}
if(localStorage.switcherStatus == undefined){
    localStorage.setItem("switcherStatus", "lightStatus lightStatus__active")
}
if(localStorage.switcherText == undefined){
    localStorage.setItem("switcherText", "ON")
}
$(".wrap").css("backgroundColor", localStorage.blackgroundColor);
$(".burger div").css("backgroundColor", localStorage.color);
$(".text").css("color", localStorage.color);
$("#textColor").text(localStorage.color);
document.querySelector(".lightStatus__text").textContent = localStorage.switcherText;
document.querySelector(".lightStatus").classList = localStorage.switcherStatus;
$(".colorInp").on("input", function () {
    $(".text").css("color", $(".colorInp").val());
    $("#textColor").text($(".colorInp").val())
    localStorage.setItem("textColor", $(".colorInp").val())
});
$(".text").css("color", localStorage.textColor);
$("#textColor").text(localStorage.textColor)
let trigger = true;
$("#dropDown").click(function () {
    if (trigger == true) {
        $(".dropDownContent").css("height", "110px");
        trigger = false;
    } else {
        $(".dropDownContent").css("height", "0px");
        trigger = true;
    }
});
$(".dropDownContent").click(function (e) {
    if (e.target.innerText != "") {
        $("#fontVal").text(e.target.innerText);
        if (e.target.innerText == "Aurore"){
            $(".text").css("font-family", "'La Belle Aurore', cursive");
            localStorage.setItem("textFont", "'La Belle Aurore', cursive");
        }
        if (e.target.innerText == "Monts."){
            $(".text").css("font-family", "'Montserrat', sans-serif");
            localStorage.setItem("textFont", "'Montserrat', sans-serif");
        }
        if (e.target.innerText == "Roboto"){ 
            $(".text").css("font-family", "'Roboto', sans-serif");
            localStorage.setItem("textFont", "'Roboto', sans-serif");
        }
        if (e.target.innerText == "Poppins"){
            $(".text").css("font-family", "'Poppins', sans-serif");
            localStorage.setItem("textFont", "'Poppins', sans-serif");
        }
        localStorage.setItem("fontVal", $("#fontVal").text());
    }
});
$(".text").css("font-family", localStorage.textFont);
$("#fontVal").text(localStorage.fontVal);
$("#sizeInp").on("input", function () {
    $(".titlePharagraf").css("font-size", $("#sizeInp").val() + "em");
    $(".titleText").css("font-size", (+$("#sizeInp").val()) + 1 + "em");
    console.log((+$("#sizeInp").val()) + 1.2 + "em");
    $("#textSize").text($("#sizeInp").val() * 16 + "px");
    localStorage.setItem("fontSize", $("#sizeInp").val());
});
if(localStorage.fontSize == undefined){
    localStorage.setItem("fontSize", 1);
}
$(".titlePharagraf").css("font-size", localStorage.fontSize + "em");
$(".titleText").css("font-size", (+localStorage.fontSize) + 1 + "em");
$("#textSize").text(localStorage.fontSize * 16 + "px");
$("#sizeInp").val(localStorage.fontSize);
$("#textSize").text($("#sizeInp").val() * 16 + "px");
$("#closeSettins").click(function () {
    $(".bgMask").css("display", "none");
});
$(".burger").click(function () {
    $(".bgMask").css("display", "flex");
});