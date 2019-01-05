//var currentValue = $("#currentValue");
//
//$(".btn").click(function(event) {
// var clicked = this.innerHTML
//  currentValue.html(clicked)
//})
var isLetter = function (str) {
    return str.length === 1 && str.match(/[a-z]/i);
}
$(function () {


    var posledenKarakter = 0;

    $(".btn").on("click", function () {
        var segasenKarakter = $(this).text();


        console.log(posledenKarakter);
        if (posledenKarakter == "÷") {
            if (segasenKarakter == "÷") {
                alert("dvata se ÷");
                return;
            } else {
                $("#display").val($("#display").val() + $(this).text());
                posledenKarakter = segasenKarakter;
                return;
            }
        }


        if (isNaN(posledenKarakter)) {
            if (isNaN(segasenKarakter)) {
                alert("dvata se znaci");
                return;
            } else {
                $("#display").val($("#display").val() + $(this).text());

            }
        } else {
            $("#display").val($("#display").val() + $(this).text());
        }


        posledenKarakter = segasenKarakter;

    })



    $(".ednakvo").on("click", function () {
        if (isNaN(posledenKarakter)) {
            alert("Vnesi Broj!");
            return;
        } else {
            $("#display").val(eval($("#display").val()))
        }
    })


    $("#display").on("keydown", function (event) {
        console.log(event);


        if (isLetter(event.key)) {
            event.preventDefault(true);
        } else {
            console.log("NE")
        }


        console.log($("#display").val());
    })
//    $("#display").on("keypress", function (event) {
//        console.log("keypress");
//        console.log($("#display").val());
//    })
//    $("#display").on("keyup", function (event) {
//        console.log("keyup");
//        console.log($("#display").val());
//    })
})
