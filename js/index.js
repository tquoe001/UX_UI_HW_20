
//Toggle on or off//
console.log("This is loading correctly to your javascript!")

$("#annotation_toggle").on("click", function(){

    console.log("You want to turn on my annotations?");

    $(".layer_4_2").toggle("on");
});

//scroll to top button//

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
