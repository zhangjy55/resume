// JavaScript Document

	window.onload = function () {
		var okuai1 = document.getElementById('kuai1Bottom');
		var oDiv = okuai1.getElementsByTagName('div');
		var oYuan = document.getElementById('yuan');
		var oSpan = oYuan.getElementsByTagName('span');
		for(var i=0;i<3;i++){
			oSpan[i].index = i;
			oSpan[i].onmouseover = function (){
				for(var j=0;j<3;j++){
					oSpan[j].className = '';
	
					oDiv[j].style.display = 'none';
				}
				this.className = 'active';
				oDiv[this.index].style.display = 'block';
			}
		}
		
	}

























