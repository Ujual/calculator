$(document).ready(function() {
    $("#butn1").click(function() {
        $("#hid1").hide(2000);
        $("#rev1").show(2300);
    });
});


function Calc(no) {
    document.getElementById("ans").value += no;


}


function clearDisplay() {
    document.getElementById("ans").value = "";
}

function displayAns() {
    var txt = document.getElementById("ans").value;
    var result = eval(txt);
    document.getElementById("ans").value = result;

}