// JavaScript Document
	var oCont3kuai = document.getElementById('cont3kuai');
	var oDiv1 = oCont3kuai.getElementsByTagName('div');
	var oZhe = document.getElementById('zhe');
	var oSpan1 = oZhe.getElementsByTagName('span');
	var oA = oZhe.getElementsByTagName('a');
	for(var n=0;n<4;n++){
		oA[n].index = n;
		oA[n].onmouseover = function (){
			for(var m=0;m<4;m++){
					oA[m].className = '';
					oDiv1[m].style.display = 'none';
					oSpan1[m].style.display = 'none';
			}
			this.className = 'active2';
			oDiv1[this.index].style.display = 'block';
			oSpan1[this.index].style.display = 'inline-block';
		}
	}

























