myfeiji={
	ele:null,
	
	init:function(){
		this.ele = document.createElement("div");
		this.ele.className="lofeiji";
		Eameeline.ele.appendChild(this.ele)
		return this
	},
	
	feiji:function(){		
		
		this.ele.style.left=(Eameeline.ele.offsetWidth-this.ele.offsetWidth)/2+"px";
		this.ele.style.top=Eameeline.ele.offsetHeight-this.ele.offsetHeight+"px";
		
		this.ele.onmousedown=function(e){
			var  e = e||window.event;
			var x =e.offsetX;
			var y =e.offsetY;
			document.onmousemove=function(e){
				var  e = e||window.event;
				var X = e.pageX-Eameeline.ele.offsetLeft-x;
				var Y = e.pageY-Eameeline.ele.offsetTop-y;
				//console.log(X)
				if (X<0) {
					X=0;
				}else if(X>Eameeline.ele.offsetWidth-myfeiji.ele.offsetWidth) {
					X=Eameeline.ele.offsetWidth-myfeiji.ele.offsetWidth;
				}

				myfeiji.ele.style.left=X+"px";
				myfeiji.ele.style.top=Y+"px";
				
				document.onmouseup=function(){
					document.onmousemove=document.onmouseup=null;
				}
			}
			
		}
		
		return this
	},
	
	tianjai:function(){
		
		var timer = setInterval(function(){
			new zhidan().init().move();
		},300)
	}
}
