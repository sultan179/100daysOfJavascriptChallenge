
const btn=document.getElementById("calculate-btn");

btn.onclick=function(){
    Calculate_tip();
}

function Calculate_tip(){
    const bill_amount = document.getElementById("bill").value;
    const service = document.getElementById("service").value;
    var num = document.getElementById("numOfPeople").value;
   
    if (bill_amount==="" || service==="0"){
        alert("fields cannot be empty");

        return;
    }

    if (num<=1 || num===""){
        num="1";
        document.getElementById("each").style.display.none;

    }
    else{
        document.getElementById("each").style.display.block;
    }

    const total_tip=((bill_amount*service)/num).toFixed(2);
   
    document.getElementById("tip").innerHTML=total_tip;

    document.getElementById("tip-container").style.display="block";
}