import React from "react";
function disableevent(option)
{
    let pollcont=option.parentNode;
    let options=pollcont.querySelectorAll(".option");
    options.forEach((otheropt)=>{
        if(otheropt!=option)
            otheropt.disabled=true;
    });
}

function result(e)
{
    let pollContainer = e.target.parentNode;
    let selectedOption = pollContainer.querySelector(".option[style*='aliceblue']");
    if (selectedOption && (!pollContainer.querySelector(".text"))) {
        e.target.style.display = "none";
        let v=Math.ceil(Math.random()*1000);
        let text=`<span class="text">${v}  people chooses the same option as you.`;
        pollContainer.insertAdjacentHTML("beforeend",text);
    }
}
function Click()
{
let cont=document.querySelectorAll(".container");
cont.forEach((container)=>{
    let options=container.querySelectorAll(".option");
        options.forEach((option)=>{
            option.addEventListener("click",()=>{
                option.style.backgroundColor="aliceblue";
                disableevent(option);
        });
    });
    const showResultButton = container.querySelector(".result");
        showResultButton.addEventListener("click", (e) => {
            result(e);
        });
  });
}

function Dynamic_poll_Creation(props)
{
    let cont=document.querySelector("#root");
    let lastchild=cont.lastElementChild;
    let new_poll_html = `<h2>${props.ques}</h2>`;
    props.options.forEach((option, index) => {
    new_poll_html += `<button class="option">${option.value}</button>`;
    });
    new_poll_html+=`<button class="result">Show Result</button>`;
    let new_poll=document.createElement("div");
    new_poll.setAttribute("class","container");
    new_poll.innerHTML=new_poll_html;
    cont.insertBefore(new_poll,lastchild);
    Click();
}

export default Dynamic_poll_Creation;