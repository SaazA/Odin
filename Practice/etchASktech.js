const container = document.querySelector("#container");

container.setAttribute("class", "container");
const button = document.createElement("button");
button.classList.add("button");
button.textContent = "Make The Grid";
let num1 = 16;

button.addEventListener('click', ()=>{
    num1 = prompt("Enter Specs For Grid");
console.log(num1);
    if(!isNaN(num1) && num1>0 ){
        createGrid();
    }else{
        alert("Enter Numericals Only");
    }
})
button.setAttribute("class", "button");
container.appendChild(button);

const maindiv = document.createElement("div");
maindiv.setAttribute("class", "maindiv");
container.appendChild(maindiv);




function createGrid(){
    maindiv.innerHTML = "";
    let numb = num1 * num1;
    console.log(numb);
    for (let i=0;i<=numb;i++){
        const div = document.createElement("div");
        div.classList.add("div");

        div.addEventListener('mouseover',()=>{
            div.style.backgroundColor = generateRandomColor();
        })
        maindiv.appendChild(div);
    }

}


function generateRandomColor(){
    const letter = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += letter[Math.floor(Math.random()*16)];
    }
    return color;
}
createGrid();
