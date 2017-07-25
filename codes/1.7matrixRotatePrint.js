/*
	@brief: 方阵旋转打印
	@remark: 分圈处理
*/
function matrixRotatePrint(matrix){
	var tR = 0;
	var tC = 0;
	var dR = matrix.length - 1;
	var dC = matrix.length - 1;
	while(tR < dR){
		rotateEdge(matrix, tR++, tC++, dR--, dC--);
	}
	return matrix
}

function rotateEdge(matrix, tR, tC, dR, dC){
	var times = dC - tC;   //总的组数
	var tmp = 0;
	for(var i=0; i<times; i++){
		tmp = matrix[tR][tC+i];
		matrix[tR][tC+i] = matrix[dC-i][tR];
		matrix[dC-i][tR] = matrix[dR][dC-i];
		matrix[dR][dC-i] = matrix[tR+i][dC];
		matrix[tR+i][dC] = tmp
	}
	return matrix;
}

var matrix = [
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12],
	[13,14,15,16]
]

console.log(matrixRotatePrint(matrix))