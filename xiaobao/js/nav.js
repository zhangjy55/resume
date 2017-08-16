// JavaScript Document

var oNav = document.getElementById('nav');
var oEm = oNav.getElementsByTagName('em');
var oSpan = oNav.getElementsByTagName('span');
var oDiv = oNav.getElementsByTagName('div');
var oStrong = oNav.getElementsByTagName('strong');
var oSection = oNav.getElementsByTagName('section');
var oA = document.getElementsByName('a1');
var oBanner = document.getElementById('banner');
for(var n=0;n<4;n++){
	oSpan[n].index = n;
	oSpan[n].onmouseover = function (){
		for(var m=0;m<4;m++){
				oEm[m].className = '';
				oDiv[m].style.display = 'none';
				oA[m].style.color= '#999999';
				oA[m].style.fontWeight= 'normal';
		}
		oEm[this.index].className = 'active';
		oA[this.index].style.color = '#D53F19';
		oA[this.index].style.fontWeight = 'bold';
		oDiv[this.index].style.display = 'block';
	}
}

for(var f=0;f<oSection.length;f++){
	oSection[f].index = f;
	oSection[f].onmouseover = function (){
		oEm[this.index].className = '';
		oDiv[this.index].style.display = 'none';
		oA[this.index].style.color= '#999999';
		oA[this.index].style.fontWeight= 'normal';
	}	
}
/*for(var e=0;e<4;e++){
	oBanner[e].index = e;
	oBanner[e].onmouseover = function (){
		oEm[this.index].className = '';
		oDiv[this.index].style.display = 'none';
		oA[this.index].style.color= '#999999';
		oA[this.index].style.fontWeight= 'normal';
	}	
}*/










