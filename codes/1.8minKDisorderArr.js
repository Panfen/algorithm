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


var arr = [8,0,5,2,2,3,4,9,6,7,9];
console.log(getMinKNumsByHeap(arr,4));