function difei(type){
	this.ele = document.createElement("div");
	this.hp = null;
	this.shed = 10;
	this.id = parseInt(Math.random()*10000000)+"",
	this.imgs = [];
	this.init = function(){
		if (type==1) {
			this.ele.className="dafeiji";
			this.hp = this.difei_Hp_Large;
			this.shed = this.difei_Speed_Large;
			this.imgs = ["img/plane3_die1.png","plane3_die2.png","plane3_die3.png","plane3_die4.png","plane3_die5.png","plane3_die6.png"];
		}else if(type==2){
			
			this.ele.className="zhonfeiji";
			this.hp = this.difei_Hp_Middle;
			this.shed = this.difei_Speed_Middle;
			this.imgs = ["img/plane2_die1.png", "img2/plane2_die2.png", "imgs2/plane2_die3.png", "img/plane2_die4.png"];
		}else if(type==3){
			this.ele.className="xiaofeiji";
			this.hp = this.difei_Hp_Small;
			this.shed = this.difei_Speed_Small;
			this.imgs = ["img/plane1_die1.png", "img/plane1_die2.png", "img/plane1_die3.png"];
		}else{
			this.ele.className="xiaofeiji";
			this.hp = this.difei_Hp_Small;
			this.shed = this.difei_Speed_Small;
		}
		Eameeline.ele.appendChild(this.ele);
		Eameeline.fiyarr[this.id]=this;
		this.ele.style.left = parseInt(Math.random()*(Eameeline.ele.offsetWidth-this.ele.offsetWidth))+"px";
		this.ele.style.top = -this.ele.offsetHeight+"px";
		return this
	};
	
	this.move=function(){
		var slfe = this;
		var stmer = setInterval(function(){
			var Y = slfe.ele.offsetTop+slfe.shed;
			if (Y>Eameeline.ele.offsetHeight) {
				clearInterval(stmer);
				Eameeline.ele.removeChild(slfe.ele)
				delete Eameeline.fiyarr[this.id];
			}
			slfe.ele.style.top=Y+"px";
		},30)
	};
	
	
	this.hps = function(){
		this.hp--;
		console.log(this.hp)
		if(this.hp==0){
			this.boom();
		}
	};
	
	this.boom=function(){
		var shlf = this;
		
		var i = 0;
		
		var timse = setInterval(function(){
			i++
			if (i>=shlf.imgs.length) {
				clearInterval(timse); 
				gameEngine.ele.removeChild(shlf.ele); 
				delete gameEngine.fiyarr[shlf.id];
			}else{
				shlf.ele.style.background = "url(" + shlf.imgs[i++] + ") no-repeat";
			}
			
		},100)
	}
}


difei.prototype = {
	Large: 1,
	Middle: 2,
	Small: 3, 
	
	difei_Hp_Large: 60,
	difei_Hp_Middle: 30,
	difei_Hp_Small: 10, 
	
	difei_Speed_Large: 3,
	difei_Speed_Middle: 6,
	difei_Speed_Small: 8, 
	
}
