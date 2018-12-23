//var currentValue = $("#currentValue");
//
//$(".btn").click(function(event) {
// var clicked = this.innerHTML
//  currentValue.html(clicked)
//})

function number(x){
document.getElementById("display").value+=x;
}

function equal(){
		var x = document.getElementById("display").value;
		document.getElementById("display").value = eval(x);
}
