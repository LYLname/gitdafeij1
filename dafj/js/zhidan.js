function zhidan(){
	this.ele = document.createElement("div");
	this.id = parseInt(Math.random()*100000000)+"";
	
	this.init = function(){
		Eameeline.zhiarr[this.id]=this;
		this.ele.className="zhidan";
		Eameeline.ele.appendChild(this.ele);
		this.ele.style.left=myfeiji.ele.offsetLeft+(myfeiji.ele.offsetWidth/2)-this.ele.offsetWidth/2+"px";
		this.ele.style.top=myfeiji.ele.offsetTop-this.ele.offsetHeight+"px";
		return this
	}
	
	this.move=function(){
		var shlf = this;
		this.timer = setInterval(function(){
			if(shlf.ele.offsetTop<-18){
				clearInterval(timer);
				Eameeline.ele.removeChild(shlf.ele);
				delete Eameeline.zhiarr[shlf.id];
			}
			shlf.ele.style.top=shlf.ele.offsetTop-8+"px";
			///console.log(shlf.ele.offsetTop)
		},30)
	}
	
	this.buom=function(){
		clearInterval(this.timer);
	}
}
