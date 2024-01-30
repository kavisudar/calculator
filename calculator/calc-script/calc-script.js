function displayValue(val){
    document.getElementById("ip").value = document.getElementById("ip").value+val;
}
function clearDisplay(){
    document.getElementById("ip").value = "";
}
function calculate(){
    var userinput=document.getElementById("ip").value;
    var result= eval(userinput);
    document.getElementById("ip").value= result;
} 