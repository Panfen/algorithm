//------------------------------------数组去重----------------------------------------

/*
	@brief: 数组去重
	@remark: 利用数组的indexOf方法
*/
function uniqueByIndexOf(arr){
	var result = [];
	arr.forEach(e => {
		if(result.indexOf(e) == -1) result.push(e);
	});
	return result;
}

/*
	@brief: 数组去重
	@remark: 利用hasn表，出现字符串和数字一样时，会出错，如：var a = [1,'1']
*/
function uniqueByHashTable(arr){
	var hash = {};
	var result = [];
	arr.forEach(e => {
		if(!hash[e]){
			hash[e] = true;
			result.push(e);
		}
	});
	return result;
}

/*
	@brief: 数组去重
	@remark: 排序后比较相邻，一样则放弃，否则加入result。出现字符串和数字一样时，会出错，如：var a = [1,'1']
*/
function uniqueBySort(arr){
	arr.sort();
  var result=[arr[0]];
  for(var i = 1; i < arr.length; i++){
    if( arr[i] !== arr[i-1]) {
      result.push(arr[i]);
    }
  }
  return result;
}


//------------------------------------数组乱序----------------------------------------

/*
	@brief: 数组乱序
	@remark: 每次随机抽一个数并移动到新数组中
*/
function disorderArray(arr){
	var result = [];
	var le = arr.length;
	while(le){
		var i = Math.floor(Math.random()*arr.length);
		if(i in arr){
			result.push(arr[i]);
			delete arr[i];   // array.splice(i, 1)[0]
			le--;
		}
	}
	return result;
}

/*
	@brief: 数组乱序
	@remark: 前面随机抽数依次跟末尾的数交换，后面依次前移，即：第一次前n个数随机抽一个跟第n个交换，第二次前n-1个数跟第n-1个交换，依次类推。
*/
function disorderArray2(arr) {
  var m = arr.length,
      t, i;
  // 如果还剩有元素…
  while (m) {
    // 随机选取一个元素…
    i = Math.floor(Math.random() * m--);
    // 与当前元素进行交换
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
}


//------------------------------------数组求交----------------------------------------

/*
	@brief: 数组求交
	@remark: 利用filter和数组自带的indexOf方法
*/
function arrayIntersection(arr1,arr2){
	var result = arr1.filter(n => {
		return arr2.indexOf(n) != -1
	});
	return result;
}

//------------------------------------数组求并----------------------------------------

/*
	@brief: 数组求并
	@remark: 连接两个数组并去重
*/
function arrayUnique(arr1, arr2) {
  var result = arr1.concat(arr2);
  return uniqueByIndexOf(result);
};

/*
	@brief: 数组求并
	@remark: arr1 合并 arr2在arr1中没有的元素
*/
function arrayUnique2(arr1, arr2) {
  var result = arr2.filter(n => {
  	return arr1.indexOf(n) == -1;
  });
  return arr1.concat(result);
};


//------------------------------------数组求差----------------------------------------

/*
	@brief: 数组求差
	@remark: 
*/
function arrayDiffer(arr1, arr2) {
  var result = arr1.filter(n => {
  	return arr2.indexOf(n) == -1;
  });
  return result;
};

var arr1 = [2,3,4,5];
var arr2 = [2,7,4,6];
console.log(arrayDiffer(arr1, arr2))