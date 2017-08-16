// JavaScript Document

var oMenu = document.getElementById('menu');
var oActive = oMenu.getElementsByTagName('a');
for(var p=0;p<7;p++){
	oActive[p].onmouseover = function (){
		for(var q=0;q<7;q++){
			oActive[q].className = '';
		}
		this.className = 'active';
	}
}





















