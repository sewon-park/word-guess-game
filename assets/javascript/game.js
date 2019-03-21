
//press any key to start
    
    //Create an array of words
    var words = ["Captain America", "Thor", "Thanos" ];

    //Choose word randomly
    var computerChoose = words[Math.floor(Math.random()*words.length)];
    console.log(computerChoose);
    var wins=0;
    var guessLeft=9;
    var rightword =[];
    var wrongword = [];




    


//create underscore based on the letter count

    var underScore = [];

    var generateUnderScore = () =>{
    for(var i = 0; i<computerChoose.length; i++){
       underScore.push('_');
        }
    return underScore;    
    }
    console.log(generateUnderScore());
  
    



//get user guess

document.addEventListener('keypress',(event) => {
    var keyword =String.fromCharCode(event.keycode);

//check if the guess is right
    if (computerChoose.indexOf(keyword)>-1){
        rightword.push(keyword);
        underScore[computerChoose.indexOf(keyword)]=keyword;
        if (underScore.join('')==computerChoose){
            alert('you win');
        }

    }
    else{
        wrongword.push(keyword);
    }

});





//if right, push the letter to right array

//if wrong, push the letter to wrong array

