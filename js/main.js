var currentValue = $("#currentValue");

$(".btn").click(function(event) {
 var clicked = this.innerHTML
  currentValue.html(clicked)
})
