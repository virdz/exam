function compute(){
    if(document.getElementById("principal").value > 0 ) {
        var amount = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = parseInt(document.getElementById("years").value);
        //var d = Date();
        //var y = d.getFullYear();
        var finish = 2021 + years;
        var interest = (amount * rate/100)*years;
        document.getElementById("result").innerHTML = "If you deposit " + amount + ",\n" + "at an interest rate of "+ rate + "%.\n" + "You will recieve an amount of " + interest + ",\nin the year " + finish;
    } else {
        alert("the ammount must be > 0");
    }
}
function updateRate(){
    document.getElementById("rateValue").innerHTML = document.getElementById("rate").value+"%";
}
