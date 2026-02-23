// ---------- JavaScript DOM ----------
function changeText(){
    document.getElementById("cardTitle").innerHTML = "📚 Dashboard Updated!";
    document.getElementById("cardContent").innerHTML = 
        "Content changed using JavaScript DOM manipulation.";
}

// ---------- jQuery ----------
$(document).ready(function(){

    // Hide
    $("#hideBtn").click(function(){
        $("#cardBox").hide(600);
    });

    // Show
    $("#showBtn").click(function(){
        $("#cardBox").show(600);
    });

    // Toggle
    $("#toggleBtn").click(function(){
        $("#cardBox").toggle(600);
    });

    // Animate
    $("#animateBtn").click(function(){
        $("#cardBox").animate({
            width: "70%",
            opacity: 0.85
        }, 500).css({
            "background": "linear-gradient(135deg, #ea00ff, #f30041)",
            "color": "black",
            "box-shadow": "0 0 25px rgba(0, 255, 255, 0.8)",
            "transform": "scale(1.03)"
        }).delay(300).animate({
            width: "60%",
            opacity: 1
        }, 500).css({
            "background": "rgb(7, 178, 10)",
            "color": "white",
            "box-shadow": "0 0 15px rgba(0,0,0,0.5)",
            "transform": "scale(1)"
        });
    });

});