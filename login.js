// Crie a função login aqui.
function addUser()
{
    player_name = document.getElementById("playername").value;
    
    localStorage.setItem("player_name", player_name);

    window.location = "gamepage.html";
}