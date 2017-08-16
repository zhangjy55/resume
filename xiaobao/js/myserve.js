// JavaScript Document
var oXuan = document.getElementById('xuan');
var oSpan2 = oXuan.getElementsByTagName('span');
var oKuai = document.getElementById('kuai2');
var oSection2 = oKuai.getElementsByTagName('section');

for(var e=0;e<4;e++){
	oSpan2[e].index = e;
	oSpan2[e].onclick = function (){
		for(var f=0;f<4;f++){
				oSpan2[f].className = '';
				oSection2[f].style.display = 'none';
		}
		oSpan2[this.index].className = 'active';
		oSection2[this.index].style.display = 'block';
	}
}








