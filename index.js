var numberofDrums=document.querySelectorAll('.drum').length;
// document.querySelector("button").addEventListener("click",handleclick);
for(i=0;i<numberofDrums;i++)
{
   document.querySelectorAll("button")[i].addEventListener("click",handleclick);
}
function handleclick()
{
  // var audio =new Audio("sounds/kick-bass.mp3");
  // audio.play();
  // this.style.color= "white";
  var buttoninnner=this.innerHTML;
  switch (buttoninnner) {
    case "w": var audio=new Audio("sounds/tom-1.mp3");
              audio.play();
              break;
    case "a": var audio=new Audio("sounds/tom-2.mp3");
              audio.play();
              break;
    case "s": var audio=new Audio("sounds/tom-3.mp3");
              audio.play();
              break;
    case "d": var audio=new Audio("sounds/tom-4.mp3");
              audio.play();
              break; 
    case "j": var audio=new Audio(" sounds/kick-bass.mp3");
              audio.play();
             
              break;
    case "k": var audio=new Audio("sounds/crash.mp3");
              audio.play();
              break; 
    case "l": var audio=new Audio("sounds/tom-1.mp3");
              audio.play();
              break;                                  
    default:
      break;
  }
}