// JavaScript Document

var oBanktop = document.getElementById('banktop');
var oSpan2 = oBanktop.getElementsByTagName('span');
var oBankbottom = document.getElementById('bankbottom');
var oDiv2 = oBankbottom.getElementsByTagName('div');
for(var n=0;n<2;n++){
	oSpan2[n].index = n;
	oSpan2[n].onclick = function (){
		for(var m=0;m<2;m++){
				oSpan2[m].className = '';
				oDiv2[m].style.display = 'none';
		}
		oSpan2[this.index].className = 'active';
		oDiv2[this.index].style.display = 'block';
	}
}