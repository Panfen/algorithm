var students = [{
    groupid: '123',
    groupname:'aaa',
    classnick: '小红'
},
{
    groupid: '45',
    groupname:'bbb',
    classnick: '小黑'
},
{
    groupid: '45',
    groupname:'bbb',
    classnick: '张三'
},
{
    groupid: '233',
    groupname:'ccc',
    classnick: '李四'
},
{
    groupid: '45',
    groupname:'bbb',
    classnick: '王五'
}];

function filter1(students) {
  var result = [];
  students.forEach(s => {
  	if(s.groupid){
  		var flag = false;
  		result.forEach(r => {
	  		if(r.g_id === s.groupid){
	  			r.g_count ++;
	  			flag = true;
	  		}
	  	});
	  	if(!flag){
	  		result.push({
	  			g_id: s.groupid,
          g_name: s.groupname,
          g_count: 1
	  		});
	  	}
  	}
  });
  return result;
}

function filter(students) {
  var obj = {};
  var result = [];
  for (var i = 0, len = students.length; i < len; i++) {
    var groupid = students[i].groupid;
    if (!groupid) continue;

    var index = obj[groupid];
    if (index) {
      result[index].g_count++;
    } else {
      result.push({
        g_id: groupid,
        g_name: students[i].groupname,
        g_count: 1
      });
      obj[groupid] = result.length - 1;
      console.log(obj)
    }
  }
  return result;
}

var arr = (function(){
  var obj ={} ,num = 0;
  return students.map(x => {
   	return obj[x.groupid]||!x.groupid ? false : (obj[x.groupid] = 1 && num++,({g_id:x.groupid,g_name:x.groupname,g_count:num}))
  }).filter(x => x)
})()

console.log(filter(students));