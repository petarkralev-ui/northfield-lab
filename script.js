// Role validation
function validateRole() {
  const role = document.getElementById("role").value.toUpperCase();
  const dept = document.getElementById("dept").value.toUpperCase();
  const out = document.getElementById("internal-output");
  if(["OBSERVER","ANALYST","LIAISON"].includes(role)){
    out.textContent = `ROLE ACKNOWLEDGED\nDepartment: ${dept}\nCLEARANCE PENDING`;
    localStorage.setItem("role",role);
  } else out.textContent="INVALID ROLE";
}

// Compliance submission
function submitCompliance() {
  const id = document.getElementById("audit-id").value;
  const dept = document.getElementById("audit-dept").value;
  const out = document.getElementById("compliance-output");
  if(id && dept) out.textContent="Form logged. Audit review pending";
  else out.textContent="Incomplete form submission";
}

// NPC Chat Logic
function sendMessage(){
  const npc = document.getElementById("npc").value;
  const msg = document.getElementById("msg").value.toLowerCase();
  const chat = document.getElementById("chat-output");

  if(npc==="Alex M." && msg.includes("environment")){
    chat.textContent += "\nAlex M.: That environment isn’t a server.";
  } else if(npc==="Dana R." && msg.includes("047")){
    chat.textContent += "\nDana R.: Stop asking about subjects.";
  } else if(npc==="Node-12" && msg.includes("shift")){
    chat.textContent += "\nNode-12: Encoded identifiers exist.";
  } else if(npc==="Chris (Former Intern)" && msg.includes("override")){
    chat.textContent += "\nChris: I saw something I shouldn’t have.";
  } else {
    chat.textContent += `\n${npc}: Request logged.`;
  }
}
