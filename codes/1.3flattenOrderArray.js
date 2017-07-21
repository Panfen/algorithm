/* 
	不考虑去重
*/
function flattenOrderArrRepeat(arr){
	arr = arr
	  .reduce((a, b) => a.concat(b), [])
	  .sort((a, b) => a - b); // 排序

	return arr;
}


/*
	考虑去重
*/
function flattenOrderArrUnique(arr){
	var obj = {};

	arr = arr
    .forEach(item => item.forEach(function(num) {
      obj[num] = true;
    }));
	arr = Object.keys(obj)
    .map(num => +num) // 将键名取出来之后，数组中全部是字符串，将其都转成数字，以便后面排序
    .sort((a, b) => a - b);

	return arr;
}

var arr = [[1, 2], [0, 3, 5], [-1, 4, 5]];
console.log(flattenOrderArrRepeat(arr));    // [ -1, 0, 1, 2, 3, 4, 5, 5 ]
console.log(flattenOrderArrUnique(arr));    // [ -1, 0, 1, 2, 3, 4, 5 ]