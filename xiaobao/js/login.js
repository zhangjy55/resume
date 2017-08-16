// JavaScript Document


var oXian = document.getElementById('xian');
var oYin1 = document.getElementById('yin1');
var oYin2 = document.getElementById('yin2');
var oHeight = document.getElementById('height');


oXian.onclick = function (){
	if (oYin1.style.display == 'block') {
		oYin1.style.display = 'none';
	}
	else{
		oYin1.style.display = 'block';
	}
	if (oYin2.style.display == 'block') {
		oYin2.style.display = 'none';
	}
	else{
		oYin2.style.display = 'block';
	}
	if (oHeight.style.height == '307px') {
		oHeight.style.height = '94px';
	}
	else{
		oHeight.style.height = '307px';
	}
	if (oHeight.className == 'bian2') {
		oHeight.className = 'bian';
	}
	else{
		oHeight.className = 'bian2';
	}	
	
	
}








