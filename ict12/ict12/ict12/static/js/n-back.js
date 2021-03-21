//<input type="text" onKeyPress="handleInput(this.value)">
//add to css
//user-select: none;
//cursor: default;

var qnum = 20;
var n = 3;
var right = 0;
var wrong = 0;
var answered = false;
var mem = [];
var qcount = 1;

for(var i = 0; i < n; i++){
    mem[i] = i - n + 1;
}

function GameAnswer(ans){
    if((ans && mem[0] == mem[n-1]) || (!ans && mem[0] != mem[n-1]) && !answered){
        right++;
        //green light
    }
    else{
        wrong++;

        //red light
    }
    answered = true;
    console.log("!!!");
    NextQ();
}

function StartGame(){
 console.log("!!!");
    document.getElementById("startgame").visibility = 'none';
    answered = false;
    var div = document.getElementById("n-backgame");
    var question = document.createElement("p");
    question.id = "question";
    question.appendChild(document.createTextNode("123"));
    div.appendChild(question);
    var counter = document.createElement("p");
    counter.id = "counter";
    counter.innerHTML = qcount + "/" + qnum;
    div.appendChild(counter);
    var yesinput = document.createElement("button");
    yesinput.id = "yesinput";
    yesinput.innerHTML = "Yes";
    yesinput.onclick = function(){GameAnswer(true);};
    div.appendChild(yesinput);
    var noinput = document.createElement("button");
    noinput.id = "yesinput";
    noinput.innerHTML = "No";
    noinput.onclick = function(){GameAnswer(false);};
    div.appendChild(noinput);
    NextQ();
}

function StopGame(){

}

function NextQ(){
    console.log(qcount);
    if(qcount <= qnum){
        for(var i = 0; i < n - 1; i++){
            mem[i] = mem[i+1];
        }
        var nextvalue = Math.floor(Math.random()*10);
        mem[n-1] = nextvalue;
        document.getElementById("question").innerHTML = nextvalue;
        document.getElementById("counter").innerHTML = qcount + "/" + qnum;
        answered = false;
        qcount++;
    }
    else{
        EndGame();
    }
}

