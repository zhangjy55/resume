// JavaScript Document
/*var oP = document.getElementById('p');
var oA = oP.getElementsByTagName('a');
var oXiala = document.getElementById('xiala');
var oUl = oXiala.getElementsByTagName('ul');

for(var i=0;i<8;i++){
	oA[i].index = i;
	oA[i].onclick = function () {
		for(var j=0;j<8;j++){
			if (oUl[j].style.display == 'block') {
				oUl[j].style.display = 'none';
			}
			else{
				oUl[j].style.display = 'block';
			}
		}
		oUl[this.index].style.display = 'block';
	}
}*/
var oUl1 = document.getElementById('ul1');
var oUl2 = document.getElementById('ul2');
var oUl3 = document.getElementById('ul3');
var oUl4 = document.getElementById('ul4');
var oUl5 = document.getElementById('ul5');
var oUl6 = document.getElementById('ul6');
var oUl7 = document.getElementById('ul7');
var oUl8 = document.getElementById('ul8');
function show1(){
	oUl2.style.display = 'none';
	oUl3.style.display = 'none';
	oUl4.style.display = 'none';
	oUl5.style.display = 'none';
	oUl6.style.display = 'none';
	oUl7.style.display = 'none';
	oUl8.style.display = 'none';
}
function show2(){
	if (oUl2.style.display == 'block') {
		oUl2.style.display = 'none';
	}
	else{
		oUl2.style.display = 'block';
	}
	oUl3.style.display = 'none';
	oUl4.style.display = 'none';
	oUl5.style.display = 'none';
	oUl6.style.display = 'none';
	oUl7.style.display = 'none';
	oUl8.style.display = 'none';
}
function show3(){
	if (oUl3.style.display == 'block') {
		oUl3.style.display = 'none';
	}
	else{
		oUl3.style.display = 'block';
	}
	oUl2.style.display = 'none';
	oUl4.style.display = 'none';
	oUl5.style.display = 'none';
	oUl6.style.display = 'none';
	oUl7.style.display = 'none';
	oUl8.style.display = 'none';
}
function show4(){
	if (oUl4.style.display == 'block') {
		oUl4.style.display = 'none';
	}
	else{
		oUl4.style.display = 'block';
	}
	oUl2.style.display = 'none';
	oUl3.style.display = 'none';
	oUl5.style.display = 'none';
	oUl6.style.display = 'none';
	oUl7.style.display = 'none';
	oUl8.style.display = 'none';
}
function show5(){
	if (oUl5.style.display == 'block') {
		oUl5.style.display = 'none';
	}
	else{
		oUl5.style.display = 'block';
	}
	oUl2.style.display = 'none';
	oUl3.style.display = 'none';
	oUl4.style.display = 'none';
	oUl6.style.display = 'none';
	oUl7.style.display = 'none';
	oUl8.style.display = 'none';
}
function show6(){
	if (oUl6.style.display == 'block') {
		oUl6.style.display = 'none';
	}
	else{
		oUl6.style.display = 'block';
	}
	oUl2.style.display = 'none';
	oUl3.style.display = 'none';
	oUl4.style.display = 'none';
	oUl5.style.display = 'none';
	oUl7.style.display = 'none';
	oUl8.style.display = 'none';
}
function show7(){
	if (oUl7.style.display == 'block') {
		oUl7.style.display = 'none';
	}
	else{
		oUl7.style.display = 'block';
	}
	oUl2.style.display = 'none';
	oUl3.style.display = 'none';
	oUl4.style.display = 'none';
	oUl5.style.display = 'none';
	oUl6.style.display = 'none';
	oUl8.style.display = 'none';
}
function show8(){
	if (oUl8.style.display == 'block') {
		oUl8.style.display = 'none';
	}
	else{
		oUl8.style.display = 'block';
	}
	oUl2.style.display = 'none';
	oUl3.style.display = 'none';
	oUl4.style.display = 'none';
	oUl5.style.display = 'none';
	oUl6.style.display = 'none';
	oUl7.style.display = 'none';
}

