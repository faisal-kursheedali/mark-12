const sides=document.querySelectorAll(".sidesoftriangle");
const checkbtn=document.querySelector("#check");
const outPut=document.querySelector("#output");

checkbtn.addEventListener("click",mainfunction);

function mainfunction(){
    //console.log("working");
    if (sides[0].value&&sides[1].value!==""){
        var side1=Number(sides[0].value);
        var side2=Number(sides[1].value);
        //console.log(side1,side2)
        const sum=sumOfSquaringSide(side1,side2);
        const hypo = Math.sqrt(sum);
        //console.log(hypo);
        outPut.innerText= "hypotanus of triangle is : "+hypo+" units";
    }else{
        outPut.innerText="Enter all the values"
    }
    
}
function sumOfSquaringSide(s1,s2){
    let sum=s1**2 +s2**2;
    //console.log(s1,s2);
    return sum;
}
