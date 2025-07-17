const menuToggle = document.getElementById("menuToggle");
    const navigationMenu = document.getElementById("navigationMenu");

    menuToggle.addEventListener("click", function () {
      navigationMenu.classList.toggle("hidden");
    });

    // toggle darkmode 
document.getElementById('toggleDarkMode').onclick = function () {
  document.documentElement.classList.toggle('dark'); 
  if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('darkMode', 'enabled');
  } else {
      localStorage.setItem('darkMode', 'disabled');
  }
};


document.addEventListener('DOMContentLoaded', (event) => {
  const toggleDarkModeButton = document.getElementById('toggleDarkModeMobile');
  
  if (toggleDarkModeButton) {
    toggleDarkModeButton.onclick = function () {
      document.documentElement.classList.toggle('dark');
      if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    };
  }
});
