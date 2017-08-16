// JavaScript Document
var oPin = document.getElementById('pin');
var oSpan1 = oPin.getElementsByTagName('span');
for(var n=0;n<oSpan1.length;n++){
	oSpan1[n].onclick = function (){
		for(var m=0;m<oSpan1.length;m++){
			oSpan1[m].style.color = '#656565';
			oSpan1[m].style.borderColor = '#D7D7D7';
		}
		this.style.color = '#D53F19';
		this.style.borderColor = '#D53F19';
	}
}
