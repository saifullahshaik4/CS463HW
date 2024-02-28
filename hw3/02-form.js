// Add your code here

function getPronouns() {
  for (const option of document.getElementsByName("pronouns")) {
    if (option.checked) {
      return option.labels[0].textContent;
    }
  }
}

function getBirthdate() {
  let b = document.getElementById("birthdate").value;
  let d = new Date(b);
  return d.toLocaleDateString();
}

function submitForm() {
  let responses = {
    Name: document.getElementById("name").value,
    Username: document.getElementById("username").value,
    Email: document.getElementById("email").value,
    Password: document.getElementById("password").value,
    "Date of Birth": getBirthdate(),
    "Preferred Pronouns": getPronouns(),
  };

  let missingresponses = [];
  for (const [k, v] of Object.entries(responses)) {
    if (v == "" || v == undefined) {
      // field is not filled out
      missingresponses.push(k);
    }
  }

  const submitinfo = document.getElementById("submission-info");
  if (missingresponses.length) {
    submitinfo.textContent =
      "Missing responses for: " +
      missingresponses.toString().replaceAll(",", ", ");
    submitinfo.style.color = "red";
  } else {
    submitinfo.textContent = "Response submitted.";
    submitinfo.style.color = "green";
    console.log({ "======== Form Submission ========": responses.stringify });
  }
}

document.addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm();
});

document.addEventListener("reset", (event) => {
  document.getElementById("submission-info").textContent = "";
});
