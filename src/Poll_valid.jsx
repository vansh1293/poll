import Dynamic_poll_Creation from "./Dynamic_poll_Creation";

function Reset()
{
  console.log("xed");
  let title=document.querySelector(".title");
  title.value="";
  let options = document.querySelectorAll("._option");
  while(options.length>2)
  {
    options[options.length-1].remove();
    options = document.querySelectorAll("._option");
  }
  options=document.querySelectorAll("._option");
  options.forEach(option=>{
    option.value="";
  });
}

function validation()
{
  let title=document.querySelector(".title");
  let options=document.querySelectorAll("._option");
  let valid = true;
  if (title.value.trim() === "") {
    alert("Title is required.");
    title.focus();
    valid=false;
  }
  if (title.value.length > 100) {
    alert("Title cannot exceed 100 characters.");
    title.focus();
    valid=false;
  }
  if (options.length < 2) {
    alert("At least 2 options are required.");
    valid=false;
  }
  options.forEach((option, index) => {
    if (option.value.trim() === "" && valid===true) {
      alert(`Option ${index + 1} cannot be empty.`);
      option.focus();
      valid = false;
      return;
    }
  });
  if(valid)
  { 
    Dynamic_poll_Creation({ ques: title.value, options: options });
    Reset();
  }
}

export default validation;