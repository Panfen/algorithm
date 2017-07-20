
//-----------------------------Stack堆栈:先进后出----------------------------------
function Stack(){
	const aElement = new Array();

	/*
		@brief: 获取堆栈元素个数
		@return：元素个数
	*/
	Stack.prototype.size = function(){
		return aElement.length;
	}

	/*
		@brief: 判断堆栈是否为空
		@return：true/false
	*/
	Stack.prototype.isEmpty = function(){
		return aElement.length === 0 ? true : false;
	}

	/*
		@brief: 元素入栈
		@param: 入栈元素列表
		@return: 堆栈元素个数
		@remark: 一次性和push多个元素
	*/
	Stack.prototype.push = function(e){
		if(arguments.length === 0)
			return -1;
		for (var i = 0; i < arguments.length; i++){
  		aElement.push(arguments[i]);     
  	}
		//return aElement.length;
	}

	/*
		@brief: 元素出栈
		@return: vElement
		@remark: 当堆栈元素为空，返回null
	*/
	Stack.prototype.pop = function(){
		if(aElement.length === 0)
			return null;
		return aElement.pop();
	}

	/*
		@brief: 获取栈顶元素
		@return: 栈顶元素
	*/
	Stack.prototype.getTop = function(){
		if(aElement.length === 0)
			return null;
		return aElement[aElement.length-1];
	}

	/*
		@brief: 遍历堆栈所有元素
		@return: 堆栈每个元素
	*/
	Stack.prototype.each = function(){
		if(aElement.length === 0)
			return null;
		for (var i = 0; i < aElement.length; i++) {
			return aElement[i];
		}
	}

	/*
		@brief: 打印堆栈所有元素
		@return: 
	*/
	Stack.prototype.show = function(flag){
		if(aElement.length === 0)
			return null;
		for (var i = 0; i < aElement.length; i++) {
			console.log(aElement[i]);
		}
	}
}


//-----------------------------Queue队列:先进后出----------------------------------
function Queue(){
	var aElement = new Array();

	/*
		@brief: 元素入队列
		@param: 入栈元素列表
		@return: 队列元素个数
		@remark: 一次性和push多个元素
	*/
	Queue.prototype.push = function(e){
		if(arguments.length === 0)
			return -1;
		for (var i = 0; i < arguments.length; i++){
  		aElement.push(arguments[i]);     
  	}
		return aElement.length;
	}

	/*
		@brief: 元素出队列
		@return: 弹出的元素
		@remark: 队列为空返回null
	*/
	Queue.prototype.pop = function(){
		return aElement.length === 0 ? null : aElement.shift();
	}

	/*
  * @brief: 获取队列元素个数
  * @return: 元素个数
  */
 	Queue.prototype.getSize = function(){
  	return aElement.length;
	}

	/*
		@brief: 打印堆栈所有元素
		@return: 
	*/
	Queue.prototype.show = function(flag){
		if(aElement.length === 0)
			return null;
		for (var i = 0; i < aElement.length; i++) {
			console.log(aElement[i]);
		}
	}
}


module.exports = {
	Stack:Stack,
	Queue:Queue
}