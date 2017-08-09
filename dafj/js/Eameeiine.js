Eameeline={
	ele:null,
	
	zhiarr:{},
	
	fiyarr:{},
	
	
	init:function(){
		this.ele  = document.getElementById("box");
		
		return this
	},
	
	kais:function(){
		
		this.yinq(function(){
			console.log("加载完成")
			myfeiji.init().feiji().tianjai();
			Eameeline.dijic();
			Eameeline.benzhuan();
			console.log(Eameeline.zhiarr)
			console.log(Eameeline.fiyarr)
		});
		
		
	},
	
	yinq:function(dd){
		var img = document.createElement("img");
		img.className="logo";
		Eameeline.ele.appendChild(img)
		
		var img1  =document.createElement("div");
		img1.className="load";
		this.ele.appendChild(img1)
		
		var arr = ["img/loading1.png","img/loading2.png","img/loading3.png"];
		var i = 0
		var slfe = this;
		var timer = setInterval(function(){
			if(i>=6){
				clearInterval(timer)
				slfe.ele.removeChild(img);
				slfe.ele.removeChild(img1);
				dd();
			}
			img1.style.background="url("+arr[i%3]+") no-repeat"
			i++
			
			
			
		},500)
	},
	
	dijic:function(){
		var slfts = this;
		setInterval(function(){			
		var num = Math.random()>0.3?true:false;
		if(num){
			//console.log(difei.prototype.Small)
			var dis = new difei(difei.prototype.Small);
			dis.init().move();
		}
								
		},1000)
		
		setInterval(function(){			
		var num = Math.random()>0.5?true:false;
		if(num){
			//console.log(difei.prototype.Middle)
			var dis = new difei(difei.prototype.Middle);
			dis.init().move();
		}
								
		},1000)
		
		setInterval(function(){			
		var num = Math.random()>0.5?true:false;
		if(num){
			//console.log(difei.prototype.Large)
			var dis = new difei(difei.prototype.Large);
			dis.init().move();
		}
						
		},5000)
				
	},
	
	benzhuan:function(){
		var slfers = this;
		var timer = setInterval(function(){
			for (var i in slfers.zhiarr) {
				for (var j in slfers.fiyarr) {
					if (isCrash(slfers.zhiarr[i].ele,slfers.fiyarr[j].ele)) {
						console.log("撞到了")
						
						Eameeline.fiyarr[j].hps();
						//Eameeline.zhiarr[i].boom();
						console.log()
					}
					
				}
			}
		},20)
	}
}

