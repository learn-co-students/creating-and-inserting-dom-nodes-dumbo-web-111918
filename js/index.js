//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

function created () {
  const element = document.body.createElement("div");
  element.innerText("Hey DOM");
  element.style.backgroundColor("#eeeeee");
  document.appendChild(element);

  console.log("Done")
}

created();
