
 //var data ;
let currentQuestion = -1;
let answer = '';
let score = 0;
let arr=[];
var testdata;
$(document).ready(function(){
    $.ajax({
        url:'http://localhost:8100/api',
        
    }).done(function(data) {
        //this.data = dataNew;
        getNextQues(data);
        $('#next').click(function(){
            getNextQues(data);
        });

        $('#prev').click(function(){
            if(currentQuestion >= 1){
                currentQuestion -= 2;
                getNextQues(data);
            }   
        });

        $('#submit').click(function(){
            $('.exam-online').hide();
            $('#result-div').show();
            $('#next').hide();
            $('#prev').hide();
            $('#submit').hide();
            for(let i=0;i<arr.length;i++){
                console.log("bye");
                if(parseInt(data[i].answer)=== arr[i]){
                    score+=1;
                    console.log("hi");
                }
            }
            console.log(score);
            document.getElementById('score').innerHTML = score;
        });
       
    }) 
})
       // console.log(this.data[0].question);


      // console.log(testdata);


function getNextQues(data){ 
    //function(data){
        
        if(currentQuestion+1 < 10){
            testdata=data;
            currentQuestion += 1;
            //document.getElementById('ques-div').innerHTML = data[currentQuestion].question;   
            $("#ques-div").text(data[currentQuestion].question);
            $("#option1").text(data[currentQuestion].options[0]);
            $("#option2").text(data[currentQuestion].options[1]);
            $("#option3").text(data[currentQuestion].options[2]);
            $("#option4").text(data[currentQuestion].options[3]);
            
        }
    //}
}



$('.checkAnswer').click(function(){
    var tempAns = $(this).index();
    
    arr.push(tempAns);
    console.log(arr)
     
});









// using fetch


//let data='http://localhost:8100/api'
// let obj;
// test =()=>{
//     fetch(data)
// .then(res=> {return res.json()})
// .then(i=> obj=i)
// console.log(obj);
// // if(currentQuestion+1 < data.length){
// //                 currentQuestion += 1;
// //                 document.getElementById('ques-div').innerHTML = data.questions[currentQuestion].question;
// //                 document.getElementById('option1').innerHTML = data.questions[currentQuestion].options[0];
// //                 document.getElementById('option2').innerHTML = data.questions[currentQuestion].options[1];
// //                 document.getElementById('option3').innerHTML = data.questions[currentQuestion].options[2];
// //                 document.getElementById('option4').innerHTML = data.questions[currentQuestion].options[3];
// //             //    answer = data.questions[currentQuestion].answer;
// //             }
// }
// test();