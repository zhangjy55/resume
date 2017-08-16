// JavaScript Document

var oDian = document.getElementById('dian');
var oSpan = oDian.getElementsByTagName('span');
var oNeirong = document.getElementById('neirong');
var oDiv = oNeirong.getElementsByTagName('div');

for(var i=0;i<3;i++){
	oSpan[i].index = i;
	oSpan[i].onmouseover = function () {
		for(var j=0;j<3;j++){
			oSpan[j].className = '';

			oDiv[j].style.display = 'none';
		}
		this.className = 'active';
		oDiv[this.index].style.display = 'block';
	}
}




