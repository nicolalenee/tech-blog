async function signupHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup-input').value.trim();
  const password = document.querySelector('#password-signup-input').value.trim();
  

  if (username && password) {
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json'}
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

async function loginHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }

  }
}

document.querySelector('#signup-form').addEventListener('submit', signupHandler);
document.querySelector('#login-form').addEventListener('submit', loginHandler);