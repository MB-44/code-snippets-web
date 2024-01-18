document.querySelector('dark-mode').addEventListener("click",
    function() {
        document.body.classList.toggle("dark");

        const isDarkMode = document.body.classList.contains("dark");

        document.body.style.background = isDarkMode ? "#202225" : "#f9f9f9";
        document.body.style.color = isDarkMode ? "f9f9f9" : "#202225";
    }
)