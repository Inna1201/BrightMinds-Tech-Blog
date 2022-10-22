let logoutBtn = document.getElementById("logout-btn");

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('logged out');
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

  logoutBtn.addEventListener('click', logout);