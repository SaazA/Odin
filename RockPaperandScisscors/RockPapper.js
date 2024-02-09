

// const playerSelection = prompt("Type the choice");

let uppercase = "ROCK";



const container = document.querySelector("#container");
const h3 = document.createElement("h3");

container.appendChild(h3);
const button1 = document.createElement("button");
button1.classList.add("button1");
button1.textContent= "ROCK";
button1.setAttribute("class" , "button");
container.appendChild(button1);


const button2 = document.createElement("button");
button2.classList.add("button2");
button2.textContent="PAPER";
container.appendChild(button2);
button2.setAttribute("class" , "button");

const button3 = document.createElement("button");
button3.classList.add("button3");
button3.textContent = "SCISSORS";
container.appendChild(button3);
button3.setAttribute("class" , "button");



button1.addEventListener('click', ()=>updateResult(game(button1.textContent)));
button2.addEventListener('click', ()=>updateResult(game(button2.textContent)));
button3.addEventListener('click', ()=>updateResult(game(button3.textContent)));


function updateResult(result){
  console.log(result);
return h3.textContent = result;
}
let playerWinCounter =0;
let pcWinCounter = 0;
let nobodycounter = 0;



function game(text){
  uppercase = text;

  if((playerWinCounter+pcWinCounter+nobodycounter)==5){
    playerWinCounter =0;
 pcWinCounter = 0;
nobodycounter = 0;
  }

  
    const numb = generateSymb();
      const save =  GetResult(uppercase, numb);
      // console.log(save);
     if(save == "Player Wins"){
     playerWinCounter +=1;
     }else if(save == "PC Wins" ){
      pcWinCounter += 1;
     } else if(save == "Nobody wins"){
      nobodycounter +=1;
     }

    console.log("PCCCC WIN COUNTER" + pcWinCounter);
    console.log("User Wins Counter " + playerWinCounter);
    console.log("Nobody Won Counter" + nobodycounter);

    if((playerWinCounter+pcWinCounter+nobodycounter)==5){

      if(playerWinCounter>pcWinCounter && (nobodycounter<=playerWinCounter || nobodycounter>=playerWinCounter)){
        return("player Won");
      }else if(pcWinCounter>playerWinCounter &&( pcWinCounter>=nobodycounter || nobodycounter>=pcWinCounter)){
       return("pc Won");
      }else if((pcWinCounter==playerWinCounter)){
       return("It's a Tie");
      }else if((pcWinCounter == 0 ) && (playerWinCounter==0)){
       return("Nobody Won");
      }
    }else{
      return ( "PC Wins   : "   + pcWinCounter + " User Wins :"+playerWinCounter + " Nobody Won :"+nobodycounter);
    }

}

function generateSymb() {
    let number = Math.floor(Math.random() * 100);
  if (number % 3 == 0) {
    return("SCISSORS");
  } else if (number % 2 != 0) {
    return("PAPER");
  } else if (number % 2 == 0) {
    return("ROCK");
  }
}


function GetResult(uppercase , getComputerChoice){
    if (uppercase == "ROCK" && getComputerChoice =="SCISSORS"){
         return("Player Wins");
    } else if ((uppercase == "ROCK" && getComputerChoice =="PAPER")){
        return("PC Wins");
    }else if ((uppercase == "ROCK" && getComputerChoice =="ROCK")){
        return("Nobody wins");
    }
    else if (uppercase == "SCISSORS" && getComputerChoice =="ROCK"){
        return("PC Wins");
   } else if ((uppercase == "SCISSORS" && getComputerChoice =="PAPER")){
       return("Player Wins");
   }else if ((uppercase == "SCISSORS" && getComputerChoice =="SCISSORS")){
       return("Nobody wins");
   }
   else if (uppercase == "PAPER" && getComputerChoice =="ROCK"){
    return("Player Wins");
} else if ((uppercase == "PAPER" && getComputerChoice =="SCISSORS")){
   return("PC Wins");
}else if ((uppercase == "PAPER" && getComputerChoice =="PAPER")){
   return("Nobody wins");
}
}




// console.log(game());

