//factory style, more involved but more sophisticated

app.factory('factory', function(){
	var info;
	
	
	// 1.  Factory implementation using variant syntax of coding
	
	return {
		setInfo: setInfo,
		getInfo: getInfo
	};
	
	function setInfo(value) {
		
		info = value;
	}
	function getInfo() {
		
		return info;
	}
	
	// 2. Factory implementation using Object Literals syntax 
	/*
		As above, we can define some functions on an Object and return them. This is just basic module pattern implementation
	*/	
	/*
	return {
	
		setInfo: function (value){
			
			info = value;
		},
		getInfo: function () {
			
			return info;
		}
	};*/	
	
});