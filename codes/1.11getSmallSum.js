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
	var mid = (l + r) / 2;
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
			h[hi++] = s[i++];
		}else{
			h[hi++] = s[j++];
		}
	}
	for(;(j < right + 1) || (i < mid + 1); j++, i++){
		h[hi++] = i > mid ? s[j] : s[i];
	}
	for(var k = 0; k != h.length; k++){
		s[left++] = h[k];
	}
	return smallSum;
}

var s = [1,3,5,2,4,6];
console.log(getSmallSum(s))