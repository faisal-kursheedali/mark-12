const side = document.querySelectorAll(".sidesoftriangle");
const calculateBtn = document.querySelector("#check");
const outPut = document.querySelector("#output");

calculateBtn.addEventListener("click",mainFunction)

function mainFunction(){
    console.log("working")
    if (side[0].value&&side[1].value !==""){
        const base=Number(side[0].value);
        const height=Number(side[1].value);
        const areaOfTriangle = calculateAreaFunction(base,height);
        //console.log(areaOfTriangle);
        outPut.innerText="The area of Triangle is : "+areaOfTriangle+" unit²"
    }else{
        console.log("Enter all the values")
        outPut.innerText="Enter all the values";
    }
}
function calculateAreaFunction(b,h){
    let area = 1/2*(b*h);
    return area;
}