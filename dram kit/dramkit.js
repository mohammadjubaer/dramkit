

document.addEventListener("keypress", function(event) {
sound(event.key);
animation(event.key);
});

for (let i=0 ; i<7; i++)
{
    let buttons = document.getElementsByClassName("button");
    let html= buttons[i].innerHTML;
    buttons[i].addEventListener("click",function(){
    sound(html);
animation(html);
 
    });
}
function sound(key) {
    key=key.toLowerCase();
switch (key) {
	case "w":
	var sound1 = new Audio("audio/tom-1.mp3");
	sound1.play();
	break;

	case "a":
	var sound2 = new Audio("audio/tom-2.mp3");
	sound2.play();
	break;

	case "s":
	var sound3 = new Audio('audio/tom-3.mp3');
	sound3.play();
	break;

	case "d":
	var sound4 = new Audio('audio/tom-4.mp3');
	sound4.play();
	break;

	case "j":
	var sound5 = new Audio('audio/crash.mp3');
	sound5.play();
	break;

	case "k":
	var sound6 = new Audio('audio/kick-bass.mp3');
	sound6.play();
	break;

	case "l":
	var sound7 = new Audio('audio/snare.mp3');
	sound7.play();
	break;

	default: alert("You entered the wrong button");
}
}

function animation(currentKey) {
  currentKey= currentKey.toLowerCase();
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("animation");

setTimeout(function() {
	activeButton.classList.remove("animation");
}, 10);
}
