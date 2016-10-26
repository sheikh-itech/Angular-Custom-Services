//provider style, full blown, configurable version

app.provider('provider', function(){
	
	// In the provider function, we cannot inject any
    // service or factory. This can only be done at the
    // "$get" method.

		
	var info;
	
	return {
		
		$get: function() {
			
			return {
				getInfo: function() {
					return info;
				},
				setInfo: function(value) {
					info = value;
				}
			};
		}
	}
	
});