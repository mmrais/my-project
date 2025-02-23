document.addEventListener("DOMContentLoaded", function () {
    // Star GIF on page load
    document.getElementById("star").src = "https://media.giphy.com/media/PlUyEOijuNtR5ezcdh/giphy.gif?cid=790b7611q3bkn5mvcxct8loij1w467ssn0vmeu57kj8dg6th&ep=v1_gifs_search&rid=giphy.gif&ct=g";

    // Change GIF when clicking "Ah"
    document.getElementById("ahButton").addEventListener("click", function () {
        document.getElementById("loveGif").src = "https://media.giphy.com/media/10tTOmhZzHMoW4/giphy.gif?cid=790b7611vcby1wjp8lchblhf4ae3l4j5fowsywd7hx2g7j25&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    });

    // Change GIF when clicking "La"
    document.getElementById("laButton").addEventListener("click", function () {
        document.getElementById("loveGif").src = "https://media.giphy.com/media/yoJC2Olx0ekMy2nX7W/giphy.gif?cid=790b7611zv456aj93vo2vly7uftx08wb8je6zxyzoiv01rim&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", function () {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "zi@gmail.com" && password === "zi") {
            window.location.href = "success.html";
        } else {
            alert("Incorrect email or password!");
        }
    });
});
