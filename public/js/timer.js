var timeout = function () {
  var time;
  window.onload = restart;
  document.onmousemove = restart;
  document.onkeydown = restart;

  async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.reload();
    }
  }

  function restart() {
      clearTimeout(time);
      // timeout after 5 minutes
      time = setTimeout(logout, 300000)
  }
};