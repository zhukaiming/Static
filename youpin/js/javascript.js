window.onload = function(){
	var aLi = document.getElementsByTagName('li');
	var aHid = document.getElementById('hid');
	for(var i = 0;i<aLi.length;i++){
		aLi.index = i;
		aLi.onmouseover = function()j
		for (var j = 0; j < aLi.length; j++) {
				aLi[j] = '';
				aHid[j].style.display = 'none';
			}
			aHid[this.index].style.display = 'block';
		}
	}
}