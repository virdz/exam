function compute() {
    var amount = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //var d = Date();
    //var y = d.getFullYear();
    //var finish = y + years;
    var interest = (amount * rate/100)*years;
    document.getElementById("result").innerHTML = "If you deposit " + amount + ",\n" + "at an interest rate of "+ rate + "%.\n" + "You will recieve an ammount of " + interest + ",\nin the year "; // + finish;
}
function updateRate(){
    document.getElementById("rateValue").innerHTML = document.getElementById("rate").value+"%";
}
