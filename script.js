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