/*
	@brief: 求最大全1子矩阵中1的个数
	@param: 二维0、1数组
	@return：最大全1子矩阵中1的个数
*/

function getMaxMatrix(arr){
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			console.log(arr[i][j])
			/*
			if(arr[i][j] != 0){
				console.log(arr[i][j])
				for(var k = j-1; k >= 0;k--){
					if(arr[i][k] != 0){
						arr[i][j] ++;

					}else{
						return;
					}
				}
			}
			*/
		}
	}
}



var arr =[
    [1,0,1,1],
    [1,1,1,1],
    [1,1,1,0]
  ];
getMaxMatrix(arr)