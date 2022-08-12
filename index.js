

const validateInput = (e) => {
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  const parent = document.getElementById('parent');
  const refe = parent.appendChild(document.createElement('p'))

  if (password.value.length < 6) {
    refe.textContent = "password too short!";
    refe.style = "color:red";
  }
  else {
    refe.textContent = "";
    refe.remove;
  }
}

function prevent(e) {
  e.preventDefault();
}