const questionForm = document.querySelector("#form");
const outputBtn = document.querySelector("#check");
const outPut=document.querySelector("#output")
const crtAns=["90","right angled"]
outputBtn.addEventListener("click",mainFunction);

function mainFunction(){
    var score=0;
    var index=0;
    console.log("working");
    var userAns= new FormData(questionForm);
    for (let givenAns of userAns.values()){
        //console.log(givenAns)
        if((givenAns)===crtAns[index]){
            score=score+1;
        }
        index = index +1
    }
    console.log("your score is : "+score+"/2");
    outPut.style.visibility="visible";
    outPut.innerText="your score is : "+score+"/2"
} 