var para = document.getElementById('para');
var count = 0;

function increament(){
    count += 1;
    para.innerHTML = "The Increamented value is : " + count;
}
function decreament(){
    count -=  1;
    para.innerHTML = "The decreamented value is  : " + count;
}