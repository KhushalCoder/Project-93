function addUser() {
    plyer1_name = document.getElementById("player1_name_input").value;
    plyer2_name = document.getElementById("player2_name_input").value;
    
    localStorage.setItem("player1", plyer1_name);
    localStorage.setItem("player2", plyer2_name);
    window.location = "second_page.html";
}