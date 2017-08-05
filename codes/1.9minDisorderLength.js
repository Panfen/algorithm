/*
	@brief: 返回需要排序的最短子数组长度
	@remark：
*/
function minDisorderLength(arr){
	if(arr == null || arr.length < 2) return 0;

	var min = arr[arr.length - 1];
	var noMinIndex = -1;
	for(var i = arr.length - 2; i != -1; i--){
		if(arr[i] > min)
			noMinIndex = i;
		else
			min = arr[i];
	}

	if(noMinIndex == -1) return 0;

	var max = arr[0];
	var noMaxIndex = -1;
	for(var i = 1; i != arr.length; i++){
		if(arr[i] < max)
			noMaxIndex = i
		else
			max = arr[i];
	}

	return noMaxIndex - noMinIndex + 1;
}

var arr = [1, 2, 4, 3, 5, 7, 6];
console.log(minDisorderLength(arr));