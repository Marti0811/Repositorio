const questions = [["¿Sección de una página que enlaza a las otras páginas?", "nav"], ["¿Sección de una página que contiene contenido relacionado a su alrededor?", "aside"], ["¿Representa el contenido predominante en la página?", "main"], ["¿Representa una sección genérica de una página?", "section"], ["¿Representa el pie de página para un elemento que lo contiene?", "footer"]];
var questionNo=1;
var score=0;

function clickButton() {
    check();
    questions.shift();
    questionNo++;
    setup();

}

function setup() {
    if (questions.length != 0) {
        document.getElementById("question").innerHTML = questions[0][0];
        document.getElementById("questionNo").innerHTML = "Pregunta" + questionNo;
    }
    else {
        document.getElementById("questionNo").innerHTML = "Terminaste!";
        document.getElementById("question").innerHTML = "Tú puntaje es: " + score;
        document.getElementById("text-field").remove();
        document.getElementById("button").remove();
    }
}

function check(){
    if(document.getElementById("text-field").value ==questions[0][1]){
    console.log("corrent");
    score++;
    document.getElementById("text-field").value= "";
    }
}
    
    
