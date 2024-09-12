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
        let text=`<span class="text">${v} people chooses the same option as you.`;
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

function Poll(props)
{
    return(
        <div className="container">
            <h2>{props.ques}</h2>
            {props.options.map((option, index) => (
        <button className="option"  onClick={Click} key={index}>{option}</button>
    ))}
    <button className="result">Show Result</button>
        </div>
    )
}
function Poll_Creation(props)
{
    return <Poll key={props.id} ques={props.poll_ques} options={props.options} />
    
}
export default Poll_Creation;