function addMethod(object, name, f){
  var old = object[name];
  object[name] = function(){
    // f.length为函数定义时的参数个数
    // arguments.length为函数调用时的参数个数

    if (f.length === arguments.length){
    	console.log(1)
      return f.apply(this, arguments);}
    else if (typeof old === "function"){
    	console.log(2)
      return old.apply(this, arguments);
    }
  };
}

// 不传参数时，返回所有name
function find0(){
  return this.names;
}

// 传一个参数时，返回firstName匹配的name
function find1(firstName){
  var result = [];
  for (var i = 0; i < this.names.length; i++){
    if (this.names[i].indexOf(firstName) === 0)
      result.push(this.names[i]);
  }
  return result;
}

// 传两个参数时，返回firstName和lastName都匹配的name
function find2(firstName, lastName){
  var result = [];
  for (var i = 0; i < this.names.length; i++){
    if (this.names[i] === (firstName + " " + lastName))
      result.push(this.names[i]);
  }　　
  return result;
}
		
var people = {　　
  names: ["Dean Edwards", "Alex Russell", "Dean Tom"]
};

addMethod(people, "find", find0);
addMethod(people, "find", find1);
//addMethod(people, "find", find2);

console.log(people.find()); // 输出["Dean Edwards", "Alex Russell", "Dean Tom"]
//console.log(people.find("Dean")); // 输出["Dean Edwards", "Dean Tom"]
//console.log(people.find("Dean", "Edwards")); // 输出["Dean Edwards"]		