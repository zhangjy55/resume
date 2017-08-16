// JavaScript Document

var oContLeft = document.getElementById('contLeft')
var oP = oContLeft.getElementsByTagName('p');
var oContRight = document.getElementById('contRight')
var oSection2 = oContRight.getElementsByTagName('section');

for(var n=0;n<4;n++){
	oP[n].index = n;
	oP[n].onclick = function (){
		for(var m=0;m<4;m++){
				oP[m].className = '';
				oSection2[m].style.display = 'none';
		}
		oP[this.index].className = 'active';
		oSection2[this.index].style.display = 'block';
	}
}






