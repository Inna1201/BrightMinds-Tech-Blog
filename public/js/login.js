const loginFormHandler = async function (event) {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();


  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Please try again");
  }
};

document.querySelector('#lform').addEventListener('submit', loginFormHandler);