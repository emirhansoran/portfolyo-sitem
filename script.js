const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {


  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.innerHTML = "☀️";
  } else {
    themeToggle.innerHTML = "🌙";
  }


  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    // ikon 
    themeToggle.innerHTML = isLight ? "☀️" : "🌙";

    
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}