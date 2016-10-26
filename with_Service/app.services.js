//service style, probably the simplest one

app.service('service', function(){
	var info;
	
	
	// 1.  Service implementation using normal syntax of coding
		
	/*
	this.setInfo = function (value) {
		
		info = value;
	}
	this.getInfo = function () {
		
		return info;
	}*/
	
	
	// 2. Service implementation using Object Literals syntax 
	
	return {
	
		setInfo: function (value){
			
			info = value;
		},
		getInfo: function () {
			
			return info;
		}
	};	
	
});