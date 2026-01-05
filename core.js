function login() {
  const id = document.getElementById("id").value;
  const ctx = document.getElementById("ctx").value;
  const out = document.getElementById("out");
  if(id==="youshouldntbehere" && ctx==="vxqffwvg"){
    localStorage.setItem("ceo","true");
    window.location="terminal.html";
  } else out.textContent="ACCESS INCOMPLETE";
}
