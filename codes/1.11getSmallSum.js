/*
	@brief: 求数组的小和
	@remark：
*/

function getSmallSum(arr){
	if(arr == null || arr.length == 0) return 0;
	return func(arr, 0, arr.length - 1);
}

function func(s, l, r){
	if(l == r) return 0;
	var mid = Math.floor((l + r) / 2);
	return func(s, l, mid) + func(s, mid + 1, r) + merge(s, l, mid, r);
}

function merge(s, left, mid, right){
	var h = [];
	var hi = 0;
	var i = left;
	var j = mid + 1;
	var smallSum = 0;
	while(i <= mid  && j <= right){
		if(s[i] <= s[j]){
			smallSum += s[i] * (right - j + 1);
			i++;
		}else{
			j++;
		}
	}
	return smallSum;
}

var s = [1,3,5,2,4,6];
console.log(getSmallSum(s))