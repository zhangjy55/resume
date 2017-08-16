// JavaScript Document
var oOver = document.getElementById('over');
var oA = oOver.getElementsByTagName('span');
var oKuai = document.getElementById('kuai');
var oDkuai = oKuai.getElementsByTagName('section');

for(var i=0;i<6;i++){
	oA[i].index = i;
	oA[i].onclick = function () {
		for(var j=0;j<6;j++){
			oA[j].className = '';

			oDkuai[j].style.display = 'none';
		}
		this.className = 'active';
		oDkuai[this.index].style.display = 'block';
	}
}









