
function MyStack(){
	const stackData = new Array();
	const stackMin = new Array();

	MyStack.prototype.push = function(e){
		if(arguments.length === 0){
			return -1;
		}
		for (var i = 0; i < arguments.length; i++){
			stackData.push(arguments[i])
  		if(stackMin.length === 0 || arguments[i] <= stackMin[stackMin.length - 1])
				stackMin.push(arguments[i]);
  	}
		return stackData.length;	
	}

	MyStack.prototype.pop = function(){
		if(stackData.length === 0)
			return null;
		else{
			var e = stackData.pop();
			if(e === stackMin[stackMin.length - 1])
				stackMin.pop();
			return e;
		}
	}

	MyStack.prototype.getMin = function(){
		return stackMin.length === 0 ? null : stackMin[stackMin.length -1];
	}
}