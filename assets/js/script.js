
$(function(){
    // data in attributes
    // getAttributeData()
    getJSON();
    // getLocalData()
 })


 function getJSON(){
    $.getJSON('database.json',function(json){
        questions = json;
        // console.log(typeof questions)
        // console.log(questions)
        localStorage.setItem("questions",JSON.stringify(questions))
        let varr=localStorage.getItem("questions");
        let obj=JSON.parse(varr)

        const keys=Object.keys(obj)

        // console.log(typeof keys)
        let b = obj[keys[1]]
        
        let oneValue=b["question"];
        console.log(oneValue[1]);
        document.getElementsByClassName("question")[0].innerHTML=b;

        // console.log(oneValue[1]);
        // const keys = Object.keys(questions)
        // console.log(keys.length);
        // // [0 -> 1] * 1
        // let randIndex = Math.round(Math.random()*(keys.length-1))
        // //
    })
}








// function getLocalData(){
//         console.log("heyy")
   
//         let name=["bmw","audi","benz"];
//         // // if(typeof(localStorage)=="undefined"){
//         // //     console.log("undefined");
//             localStorage.setItem("names",JSON.stringify(name));
//             let storedNames=localStorage.getItem("names");
//             // let storedArray=JSON.parse(storedNames);
//             console.log(storedNames) 
//             //Array value
//             // console.log(storedArray); 
//             let indexNum=storedNames[1];
//             console.log(indexNum);
            
//             // our array
// // var movies = ["Reservoir Dogs", "Pulp Fiction", "Jackie Brown", 
// // "Kill Bill", "Death Proof", "Inglourious Basterds"];
 
// // storing our array as a string
// localStorage.setItem("quentinTarantino", JSON.stringify(movies));
 
// // retrieving our data and converting it back into an array
// var retrievedData = localStorage.getItem("quentinTarantino");
// var movies2 = JSON.parse(retrievedData);

// console.log(movies2)  
// let V = movies2[1];
// console.log(v)
            
// }
