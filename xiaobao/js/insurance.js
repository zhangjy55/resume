// JavaScript Document
var oP = document.getElementById('p');
var oSpan4 = oP.getElementsByTagName('span');
var oContBottom = document.getElementById('contBottom');
var oAside = oContBottom.getElementsByTagName('aside');
for(var n=0;n<5;n++){
	oSpan4[n].index = n;
	oSpan4[n].onmouseover = function (){
		for(var m=0;m<5;m++){
				oSpan4[m].className = '';
				oAside[m].style.display = 'none';
		}
		oSpan4[this.index].className = 'active';
		oAside[this.index].style.display = 'block';
	}
}