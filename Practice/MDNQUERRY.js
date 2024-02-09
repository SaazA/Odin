const link = document.querySelector("a");
link.textContent = "HOLAAA ";
link.href = "https://google.com";


const sect = document.querySelector("section");

const para = document.createElement("p");
para.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sequi officiis, vero dolorem ";


sect.appendChild(para);
para.setAttribute("class", "highlight");



const text = document.createTextNode ("eum recusandae laudantium illo incidunt consequatur, quaerat ducimus veritatis deleniti!");

const linkPara = document.querySelector("p");
linkPara.appendChild(text);


