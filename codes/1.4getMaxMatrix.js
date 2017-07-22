/*
	@brief: 求最大全1子矩阵中1的个数
	@param: 二维0、1数组
	@return：最大全1子矩阵中1的个数
*/

function getMaxMatrix(map){
	if(map == null || map.length == 0 || map[0].length == 0) return 0;
	var maxArea = 0;
	var height = [];
	for(var k = 0; k < map[0].length; k++){
		height[k] = 0;
	}

	for(var i = 0; i < map.length; i++){
		for(var j = 0; j < map[0].length; j++){
			height[j] = map[i][j] == 0 ? 0 : height[j] + 1;
		}
		maxArea = Math.max(maxMatrixFromBottom(height), maxArea);
	}
	return maxArea;
}

function maxMatrixFromBottom(height){
	if(height == null || height.length == 0) return 0;
	var maxArea = 0;
	var stack = [];
	for(var i = 0; i < height.length; i++){
		while(stack.length != 0 && height[i] <= height[stack[stack.length - 1]]){
			var j = stack.pop();
			var k = stack.length == 0 ? -1 : stack[stack.length - 1];
			var curArea = (i - k -1) * height[j];
			maxArea = Math.max(maxArea, curArea);
		}
		stack.push(i);
	}
	while(stack.length != 0){
		var j = stack.pop();
		var k = stack.length == 0 ? -1 : stack[stack.length - 1];
		var curArea = (i - k -1) * height[j];
		maxArea = Math.max(maxArea, curArea);
	}
	return maxArea;
}

var map =[
    [1,1,1,1],
    [1,1,1,1],
    [1,0,0,0]
  ];
console.log(getMaxMatrix(map))