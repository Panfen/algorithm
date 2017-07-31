/*
	@brief: 找到无序数组中的最小k个数
	@remark：采用大根堆（最大堆）的存储方式
*/
function getMinKNumsByHeap(arr, k){
	if(k < 1 || k > arr.length) return arr;
	var kHeap = [];
	for(var i = 0; i < k; i++){
		heapInsert(kHeap, arr[i], i);
	}
	for(var i = k; i < arr.length; i++){
		if(arr[i] < kHeap[0]){
			kHeap[0] = arr[i];
			heapify(kHeap, 0, k);
		}
	}
	return kHeap;
}

//建堆
function heapInsert(arr, value, index){
	arr[index] = value;
	while(index != 0){
		var parent = (index - 1) / 2;
		if(arr[parent] < arr[index]){
			swap(arr, parent, index);
			index = parent;
		}else
			break;
	}
}

function swap(arr, index1, index2){
	var tmp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = tmp;
}

function heapify(arr, index, heapSize){
	var left = index * 2 + 1;
	var right = index * 2 + 2;
	var largest = index;
	while(left < heapSize){
		if(arr[left] > arr[index])
			largest = left;
		if(right <  heapSize && arr[right] > arr[largest])
			largest = right;
		if(largest != index)
			swap(arr, largest, index);
		else
			break;
		index = largest;
		left = index * 2 + 1;
		right = index * 2 + 2;
	}
}



/*
	@brief: 找到无序数组中的最小k个数
	@remark：采用BFPRT算法
*/
function getMinKNumsByBFPRT(arr, k){
	if(k < 1 || k > arr.length){
		return arr;
	}
	var minKth = getMinKthByBFPRT(arr, k);
	var res = [];
	var index = 0;
	for(var i=0; i != arr.length; i++){
		if(arr[i] < minKth)
			res[index++] = arr[i];
	};
	for(; index != res.length; index){
		res[index] = minKth;
	}
	return res;
}

function getMinKthByBFPRT(arr, k){
	var copyArr = copyArray(arr);
	return select(copyArr, 0, copyArr.length-1, k-1);
}

function copyArray(arr){
	var res = [];
	for(var i=0; i != arr.length; i++){
		res[i] = arr[i];
	}
	return res;
}

function select(arr, begin, end, i){
	if(begin == end){
		return arr[begin];
	}
	var pivot = medianofMedians(arr, begin, end);
	var pivotRange = partition(arr, begin, end, pivot);
	if(i >= pivotRange[0] && i <= pivotRange[1])
		return arr[i];
	else if(i < pivotRange[0])
		return select(arr, begin, pivotRange[0]-1, i);
	else
		return select(arr, pivotRange[1]+1, end, i);
}

function partition(arr, begin, end, pivotValue){
	var small = begin - 1;
	var cur = begin;
	var big = end + 1;
	while(cur != big){
		if(arr[cur] < pivotValue)
			swap(arr, ++small, cur++);
		else if(arr[cur] > pivotValue)
			swap(arr, cur, --big);
		else
			cur++;
	}
	return [small+1, big-1];
}

function medianofMedians(arr, begin, end){
	var num = end - begin + 1;
	var offset = num % 5 == 0 ? 0 : 1;
	var len = Math.floor(num / 5) + offset;
	var mArr = [];
	for(var i=0; i<len; i++){
		var beginI = begin + i * 5;
		var endI = beginI + 4;
		mArr[i] = getMedian(arr, beginI, Math.min(end, endI));
	}
	return select(mArr, 0, len-1, Math.floor(len/2));
}

function getMedian(arr, begin, end){
	insertionSort(arr, begin, end);
	var sum = end + begin;
	var mid = (Math.floor(sum / 2)) + (sum % 2);
	return arr[mid];
}

function insertionSort(arr, begin, end){
	for(var i = begin + 1; i != end +1; i++){
		for(var j = i; j != begin; j--){
			if(arr[j-1] > arr[j])
				swap(arr, j-1, j);
			else
				break;
		}
	}
}

var arr = [8,0,5,2,2,3,4,9,6,7,9];
console.log(getMinKNumsByBFPRT(arr,4));
console.log(getMinKNumsByHeap(arr,4));