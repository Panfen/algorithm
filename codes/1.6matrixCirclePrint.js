/*
	@brief: 矩阵分圈打印
	@remark: 利用数组的indexOf方法
*/

function matrixCirclePrint(matrix){
	var tR = 0;
	var tC = 0;
	var dR = matrix.length - 1;
	var dC = matrix.length - 1;
	while(tR <= dR && tC <= dC){
		printCircle(matrix, tR++, tC++, dR--, dC--);
	}
}

function printCircle(matrix, tR, tC, dR, dC){
	if(tR == dR){  //子矩阵只有一行
		for(var i = tC; i <= dC; i++){
			console.log(matrix[tR][i]);
		}
	}else if(tC == dC){  //子矩阵只是一列
		for(var i = tR; i <= dR; i++){
			console.log(matrix[i][tC]);
		}
	}else{
		var curR = tR;
		var curC = tC;
		while(curC != dC){
			console.log(matrix[tR][curC]);
			curC++;
		}
		while(curR != dR){
			console.log(matrix[curR][dC]);
			curR++;
		}
		while(curC != tC){
			console.log(matrix[dR][curC]);
			curC--;
		}
		while(curR != tR){
			console.log(matrix[curR][tC]);
			curR--;
		}
	}
}

var matrix = [
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12],
	[13,14,15,16]
]

matrixCirclePrint(matrix)