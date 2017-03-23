var Progress = function(opt){
	this.progress = document.createElement("div");
	var parent = document.querySelector(opt.container);
	parent.style.position = "relative";
	this.progress.style.position = "absolute";
	this.progress.style.width = "0%";
	this.progress.style.height = "5px";
	this.progress.style[opt.bottom ? "bottom" : "top"] = "5px";
	this.progress.style.left = "0px";
	this.progress.style.backgroundColor = "#26B600";
	this.progress.style.transition = "width 0.8s ease-in-out";
	this.progress.style.padding = 0;
	this.progress.style.margin = 0;
	parent.appendChild(this.progress);
}

Progress.prototype.start = function(){
	this.progress.style.width = "30%";
	var that = this;
	setTimeout(function(){
		that.progress.style.width = "70%";
	},1000)
}

Progress.prototype.end = function(){
	this.progress.style.width = "100%";
}

module.exports = Progress;