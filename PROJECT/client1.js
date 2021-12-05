var url = "http://localhost:3000/post";
window.onload = function()
{
    
var attemptcode = [];

    $.post(url+'?data='+JSON.stringify({
        'action':'evaluate',
        'attempt_code':attemptcode,  }),
response);
function response(data, status){
    var response = JSON.parse(data);
    console.log(data);

    //add somethibg here about what to display  thst result but im not getting it
     }
}
function checkUncheck(num){
for (i=0;i<5;i++){
attemptcode[i]=num;
}
    }