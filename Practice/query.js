//querrySelector- works for the very first instnace that is found, and in this case it will only work for the elements mentioned in the HTML File, don't get confused to mention the querrySelector inside this same file while creating a variable

const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is great";
container.appendChild(content);

const content1 = document.createElement("p");
content1.classList.add("content1");
content1.textContent = "Hey i'm red";
content1.style.color = "red";
container.appendChild(content1);

const content2 = document.createElement("h3");
content1.classList.add("content2");
content2.textContent = "Hey i'm Blue";
content2.style.color = "blue";
container.appendChild(content2);

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "2px solid black";

const content4 = document.createElement("h1");
content4.classList.add("content4");
content4.textContent = "I'm in a div";
div.appendChild(content4);

const content3 = document.createElement("p");
content3.classList.add("content3");
content3.textContent = "ME TOO";

div.appendChild(content3);


// the div
container.appendChild(div);

const btn = document.querySelector("#btn");
// btn.onclick = ()=>{
//         alert("Hellow");
// }
btn.addEventListener('click', function (e) {
        console.log(e.target);
        e.target.style.background = 'blue';
        
      });

const btn1 = document.querySelector("#btn1");
btn1.addEventListener('click' , ()=>{
        alert("hellowwww");
});

const alertFunction = ()=>{
alert("HELLLO");
}
const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', alertFunction);


const buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
                button.addEventListener('click', ()=>{
                        alert(button.id);
                });
})