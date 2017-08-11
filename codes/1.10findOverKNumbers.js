var util = require('./util.js');

/*
	@brief: 找到出现次数大于一半的数
	@remark：重复删除两个不同的数，直到最后剩一个或不剩
*/
function findHalfMajor(arr){

	var cand = 0; //候选
	var times = 0; //次数

	// 一次在数组中删除两个不同的数
	for(var i = 0; i != arr.length; i++){
		if(times == 0){
			cand = arr[i];
			times = 1;
		}else if(arr[i] == cand){
			times ++;
		}else{
			times --;
		}
	}

	// 检测最后剩下的数是否次数真正大于一半
	times = 0;
	for(var i = 0; i != arr.length; i++){
		if(arr[i] == cand){
			times ++;
		}
	}
	if(times > arr.length / 2)
		console.log(cand)
	else
		console.log('no such number');
}


/*
	@brief: 找到出现次数大于N/K的数
	@remark：重复删除K个不同的数，直到最后剩的种类少于K
*/
function findKMajor(arr, k){
	if(k < 2){
		console.log('the value of k is invalid!');
		return;
	}

	var cands = new util.HashMap();

	for(var i = 0; i != arr.length; i++){
		if(cands.containsKey(arr[i])){
			cands.put(arr[i], cands.get(arr[i]) + 1);
		}else{
			if(cands.size() == k - 1){
				allCandsMinusOne(cands);
			}else{
				cands.put(arr[i], 1);
			}
		}
	}

	var reals = getReals(arr, cands);
	var keys = cands.keys();
	var hasVal = false;
	for(var key in keys){
		if(reals.get(key) > arr.length / k){
			hasVal = true;
			console.log(key + ' ');
		}
	}
	console.log(hasVal ? '' : 'no such number!');
}

function allCandsMinusOne(cands){
	var keys = cands.keys();
	for(var key in keys){
		if(cands.get(key) == 1)
			cands.remove(key);
		else
			cands.put(key, cands.get(key) - 1);
	}
}

function getReals(arr, cands){
	var reals = new util.HashMap();
	for(var i = 0; i != arr.length; i++){
		var curNum = arr[i];
		if(cands.containsKey(curNum)){
			if(reals.containsKey(curNum)){
				reals.put(curNum, reals.get(curNum) + 1);
			}else{
				reals.put(curNum, 1)
			}
		}
	}
	return reals;
}


var arr = [1,2,3,2,2,4,2,5,2,5,6,7,2,2,2,2,25,2,2,5,5,5,5,5];
findHalfMajor(arr);
findKMajor(arr, 4);