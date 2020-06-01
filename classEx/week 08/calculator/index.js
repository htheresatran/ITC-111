var val1, val2;
function loadDisplay(num) {
    document.getElementById('display2').value += num.value.toString();
}
function delFromRight() {
    document.getElementById('display2').value = document.getElementById('display2').value.slice(0,-1);
}
function clearDisplay() {
    document.getElementById('display2').value = "";

}
function setOperator(trg) {
    val1 = document.getElementById('display2').value + "" + trg.value;
    document.getElementById('display1').innerHTML = val1;
    document.getElementById('display2').value = "";
}