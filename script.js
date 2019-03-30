window.onload = function (){
var n = 0;
var butt = document.getElementById("start");
var c = 300000;

butt.onclick = function (){
  v = document.getElementById("YourSpeed").value;
  T1 = 1 / Math.sqrt(1 - (Math.pow(v, 2)/Math.pow(c, 2))); 
  document.getElementById('Output').value=T1;
  document.getElementById('anim').className ='slide-right'
};
}