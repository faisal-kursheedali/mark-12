const angleOfTriangle=document.querySelectorAll(".angle");
const checkBtn= document.querySelector("#check");
const outPut= document.querySelector("#output");

checkBtn.addEventListener("click", mainFunction);


function mainFunction(){
    //console.log("working")
    if(angleOfTriangle[0].value && angleOfTriangle[1].value && angleOfTriangle[2].value!==""){
        const angle1=Number(angleOfTriangle[0].value);
        const angle2=Number(angleOfTriangle[1].value);
        const angle3=Number(angleOfTriangle[2].value);
        const sum = sumFunction(angle1,angle2,angle3);
        if (sum === 180){
            //console.log("The angles form Triangle")
            displayOutPutFunction("The angles form Triangle");
        }else{
            //console.log("The angles don't form Triangle")
            displayOutPutFunction("The angles don't form Triangle")
        }
    }else{
        //console.log("Enter the angles")
        displayOutPutFunction("Enter all the angles")
    }
}
function sumFunction(a1,a2,a3){
    let sum = a1+a2+a3
    return sum
}
function displayOutPutFunction(msg){
    outPut.innerText=msg
}