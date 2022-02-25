const speed = 100;
const TypingTopElement= document.getElementById("TypingTextTop");
const TypingBottomElement= document.getElementById("TypingTextBottom");

var pausesBetweenTypingErasing=1500;

var textToType=["Budi izvrstan u onom što vidiš!","voliš.","ZAISKRI."];


var i=0;

TypeText(textToType[0],TypingTopElement);

function TypeText(text,elementForTyping) {


    if (i < text.length) {
        elementForTyping.innerHTML += text.charAt(i);
      i++;
      setTimeout(TypeText, speed,text,elementForTyping);
    }
    else{
      i=0;
      setTimeout(EraseText, pausesBetweenTypingErasing,6,TypingTopElement);
    }
     
  
  }
  function EraseText(howManyCharactersToErase,elementForErasing){
    var text=elementForErasing.textContent;
	if (howManyCharactersToErase > 0) {
        elementForErasing.innerHTML = text.substring(0,text.length-1);
        setTimeout(EraseText, speed,howManyCharactersToErase-1,elementForErasing);
      } 
      else{
        setTimeout(TypeTextTwoLabels, pausesBetweenTypingErasing,TypingTopElement,TypingBottomElement,textToType[1],textToType[2],false);
      }
}
function TypeTextTwoLabels(element1ToType,element2ToType,text,text2,firstDone){

    if (i < text.length&&firstDone==false) {
        element1ToType.innerHTML += text.charAt(i);
      i++;
      setTimeout(TypeTextTwoLabels, speed,element1ToType,element2ToType,text,text2,firstDone);
    }
    else{
        if(!firstDone){
            i=0;
            element1ToType.classList.remove("blinker");
            element2ToType.classList.add("blinker");
        }
      firstDone=true;
      if (i < text2.length){
        element2ToType.innerHTML += text2.charAt(i);
        i++;
        setTimeout(TypeTextTwoLabels, speed,element1ToType,element2ToType,text,text2,firstDone);
      }
      else{
          setTimeout(EraseEverything,pausesBetweenTypingErasing);
      }

    }
     
}

function EraseEverything(){
    var text=TypingTopElement.textContent;
    var text2=TypingBottomElement.textContent;
    var removedBlinker=false;

    if(text2.length>0){
        TypingBottomElement.innerHTML = text2.substring(0,text2.length-1);
        setTimeout(EraseEverything, speed);
      }
      else if (text.length > 0) {
        if(!removedBlinker){
          TypingBottomElement.classList.remove("blinker");
          TypingTopElement.classList.add("blinker");
          removedBlinker=true;
        }

        TypingTopElement.innerHTML = text.substring(0,text.length-1);
        setTimeout(EraseEverything, speed);
      }
      
      if(text2.length==0&&text.length==0){
          i=0;
        setTimeout(TypeText,pausesBetweenTypingErasing,textToType[0],TypingTopElement);
    }
      
    
}
