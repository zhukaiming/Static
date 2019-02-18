//

handleCart();
handleNav();
search();
handleCarousel();
handleCate();
function handleCart(){


	var oCartbox = document.querySelector('.box-cart');//获取选择器
	var oCart = document.querySelector('.box-cart .cart');
	var oCartA = oCart.getElementsByTagName('a')[0];
	var oContent = document.querySelector('.box-cart .cart-content');
	var oCartloader = document.querySelector('.box-cart .cart-content .loader');
	var oEmptyspan = document.querySelector('.cart-content .empty-cart');
	
	oCartbox.onmouseenter = function(){
		//改变购物车背景色
		oCart.style.background = "#fff";
		oCartA.style.color = "#ff6700";
		oCartloader.style.display = 'block';
		animation(oContent,{height:100},false,function(){
			oCartloader.style.display = 'none';
			oEmptyspan.style.display  ='block';
		});

		//购物车内部显示出来
	}
	oCartbox.onmouseleave = function(){
		oCart.style.background = "#333333";
		oCartA.style.color = "#b0b0b0";
		//oCartloader.style.display = 'none';
		oEmptyspan.style.display  = 'none';
		animation(oContent,{height:0},false);
	}
}
function handleNav(){
	var oNavcontent = document.querySelector('.header .nav-content');
	var oNavA = document.querySelectorAll('.header .nav a');
	var oNavUl = oNavcontent.getElementsByTagName('ul')[0];
	var oNavloader = document.querySelector('.nav-content .loader')
	//var oNavli = document.querySelectorAll('.nav-content li');
	var timer = null;
	for(var i = 0;i<oNavA.length - 2;i++){
		oNavA[i].index = i;
		oNavA[i].onmouseenter = function(){
			clearTimeout(timer);
			oNavUl.innerHTML = '';
			//oNavcontent.style.display = 'block';
			oNavcontent.style.borderTop = '1px solid #ccc'
			animation(oNavcontent,{height:200},false);
			oNavloader.style.display = 'block';
			var index = this.index;
			setTimeout(function(){
				loadData(index)
				oNavloader.style.display = 'none';
			},1000);

		}
		oNavA[i].onmouseleave = function(){
			timer = setTimeout(function(){
				oNavcontent.style.borderTop = 'none';
				animation(oNavcontent,{height:0},false);
				oNavloader.style.display = 'none';
				oNavUl.innerHTML = '';
			},600)
		oNavcontent.onmouseenter =function(){
			clearTimeout(timer);
		}
		oNavcontent.onmouseleave = function(){
			timer = setTimeout(function(){
				oNavcontent.style.borderTop = 'none';
				animation(oNavcontent,{height:0},false);
			},600)
		}	
		}
		function loadData(index){
			//console.log(index)
			oNavUl.innerHTML = '';//清空
			var Datas = aNavItems[index];
			if(!Datas){
				return;
			}
			for(var i =0; i<Datas.length;i++){
				var oLi = document.createElement('li');
				var oDiv = document.createElement('div');
				oDiv.className = 'img-box';
				var oImg = document.createElement('img');
				oImg.src = Datas[i].img;
				var oP1 = document.createElement('p');
				oP1.className = "pro-nam";
				oP1.innerHTML = Datas[i].name;
				var oP2 = document.createElement('p');
				oP2.className = "pro-pri";
				oP2.innerHTML = Datas[i].price + "元起";
				if(Datas[i].tag){
					var oSpan = document.createElement('span');
					oSpan.className = "tag";
					oSpan.innerHTML = Datas[i].tag;
					oLi.appendChild(oSpan)
				}
				oDiv.appendChild(oImg);
				oLi.appendChild(oDiv);
				oLi.appendChild(oP1);
				oLi.appendChild(oP2);
				oNavUl.appendChild(oLi);
			}
		}
	}
}
function search(){	
	var oList = document.querySelector('.header .search .list');
	var oInput = document.querySelector('.header .search .inputer input');
	var oInputer = document.querySelector('.header .search .inputer');
	var aSearchA = document.querySelectorAll('.search .inputer a');
	var oSearch = document.querySelector('.search .searcher');
	oInput.onfocus = function(){
		oList.style.display = 'block';
		oInputer.style.borderColor = "#ff6700";
		oSearch.style.borderColor = '#ff6700';
		aSearchA[0].style.display = 'none';
		aSearchA[1].style.display = 'none';
	}
	oInput.onblur = function(){
		oList.style.display = 'none';
		oInputer.style.borderColor = "#e0e0e0";
		aSearchA[0].style.display = 'block';
		aSearchA[1].style.display = 'block';
		oSearch.style.borderColor = '#e0e0e0';
	}
}
function handleCarousel(){
	new Carousel({
			id:'carousel',
			aImg:[
			'images/lun1.jpg',
			'images/lun2.jpg',
			'images/lun3.jpg',
			'images/lun4.jpg'],
			width:1226,
			height:460,
			playDuration:1000
		}); 
}
function handleCate(){
	var aCat = document.querySelectorAll('.hot .leftuse li a');
	var oCatcontent = document.querySelector('.hot .left-content');
	var oCatUl = oCatcontent.getElementsByTagName('ul')[0];
	var timer = null;
	var oCat =  document.querySelector('.hot .leftuse');
	for(var i = 0;i<aCat.length;i++){
		aCat[i].index = i;
		aCat[i].onmouseenter = function(){
			
			for(var j = 0;j<aCat.length;j++){
				aCat[j].className = '';
			}
			this.className = 'active';
			oCatcontent.style.display = 'block';
			loadData(this.index)
		}

	}
	oCat.onmouseleave = function(){
			timer = setTimeout(function(){
				for(var i = 0;i<oCat.length;i++){
					oCat[i].className = '';
				}
				oCatcontent.style.display = 'none';
			},300)
		}
	oCatcontent.onmouseenter = function(){
			clearTimeout(timer);
		}
	oCatcontent.onmouseleave = function(){
			timer = setTimeout(function(){
				for(var i = 0;i<oCat.length;i++){
					oCat[i].className = '';
				}
				oCatcontent.style.display = 'none';
			},500)
		}
	function loadData(index){
		oCatUl.innerHTML = '';
		var datas = aCatItems[index];
		if(!datas){
				return;
			}
		for(var i =0; i<Datas.length;i++){
			var oLi = document.createElement('li');
			
			oCatUl.appendChild(oLi);
		}
	}
}
