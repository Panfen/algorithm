
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


//-----------------------------HashMap----------------------------------
function HashMap(){
	var length = 0;   // map的长度
	var obj = new Object();

	/*
		@brief: 判断是否为空
		@return: true/false
	*/
	this.isEmpty = function(){
		return length == 0;
	}

	/*
		@brief: 判断是否包含给定key
		@return: true/false
	*/
	this.containsKey = function(key){
		return (key in obj)
	}

	/*
		@brief: 判断是否包含给定value
		@return: true/false
	*/
	this.containsValue = function(){
		for(var key in obj){
			if(obj[key] == value)
				return true;
		}
		return false;
	}

	/*
		@brief: 向map中添加元素
		@return: 
	*/
	this.put = function(key, value){
		if(!this.containsKey(key)){
			length ++;
		}
		obj[key] = value;
	}

	/*
		@brief: 获取给定key的value
		@return: value
	*/
	this.get = function(key){
		return this.containsKey(key) ? obj[key] : null;
	}

	/*
		@brief: 删除给定key
		@return: 
	*/
	this.remove = function(key){
		if(this.containsKey(key) && (delete obj[key])) length--;
	}

	/*
		@brief: 获取所有key
		@return: keys
	*/
	this.keys = function(){
		var _keys = new Array();
		for(var key in obj){
			_keys.push(key);
		}
		return _keys;
	}

	/*
		@brief: 获取所有的value
		@return: values
	*/
	this.values = function(key){
		var _values = new Array();
		for(var key in obj){
			_values.push(obj[key]);
		}
		return _values;
	}

	/*
		@brief: 获取map的长度
		@return: length
	*/
	this.size = function(key){
		return length;
	}

	/*
		@brief: 清空map
		@return: length
	*/
	this.clear = function(key){
		length = 0;
		obj = new Object();
	}
}

module.exports = {
	Stack:Stack,
	Queue:Queue,
	HashMap:HashMap
}