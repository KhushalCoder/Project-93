Player1_name = localStorage.getItem("player1_name");
Player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = Player1_name + " :";
document.getElementById("player2_name").innerHTML = Player2_name + " :";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + Player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + Player2_name;


function send() {
    
    number1 = document.getElementById("number_1").value ;
    number2 = document.getElementById("number_2").value ;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>"
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-primary onclick='check()'>Check</button>";
    row = question_number + input_box + check_button; 
    document.getElementById("output").innerHTML = row;

    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

question_turn = "player1"
answer_turn = "player2"

function check(){
get_answer = document.getElementById("input_check_box").value;
if (get_answer == actual_answer) {
    
    if (answer_turn == "player1") {
        player1_score = player1_score + 1;
        update_score();
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else{
        Player2_score = Player2_score + 1
        update_score();
        document.getElementById("player2_score").innerHTML = Player2_score;
    }

}
if (question_turn == "player1") {
    question_turn = "player2";
    document.getElementById("player_question").innerHTML = "Quesion Turn" + Player2;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Ouestion Turn" + Player1;
    }

}

function update_score() {
    localStorage.setItem("player1_score",player1_score);
    localStorage.setItem("player2_score".player2_score);
}