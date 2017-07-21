/*
	@brief: 生成窗口最大值数组
	@param: 数组arr,窗口大小w
	@return：窗口最大值组成的数组
*/
function getWindowMax(arr, w){
	var res = [];    // 用于保存结果
	var qmax = [];   // 模拟双端队列
	for(let i = 0; i < arr.length; i++){
		qmax = dealArr(arr, qmax, i);
		if(qmax[0] === (i - w)) qmax.shift();
		if(i >= (w-1)) res.push(arr[qmax[0]]);
	}
	return res;
}

function dealArr(arr, qmax, i){
	if(qmax.length === 0){
		qmax.push(i);
		return qmax;
	}
	if(arr[qmax[qmax.length - 1]] > arr[i]){
		qmax.push(i);
		return qmax;
	}else{
		qmax.pop();
		return dealArr(arr, qmax, i);
	}
}

var res = getWindowMax([4,3,5,4,3,3,6,7], 3);
console.log(res);   // [5,5,5,4,6,7]