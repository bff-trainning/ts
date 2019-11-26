let x: number;
x = 10;
console.log(x);



//基本数局类型
/**
 * boolean
 * number
 * string
 * array
 * tuple
 * enum
 * any
 * null undefined
 * void
 * never

 */


//number
let f1: number = 100.8;
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;


//boolean
let flag: boolean = true || false;

//string
let s: string = '123';
let s2: string = "123";
let s3: string = `123${4}`;
let s4: string = `sss
Before trying anything  else you want to make sure your paths that you are using in your launch configuration are correct.
`;

let s5 = new String('sss');


//Array
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2];
let arr1_1 = arr1[0];

//Tuple 元组
let t: [string, number, boolean] = ["小明", 100, true];
let t_1 = t[0];



//枚举enum
enum Color {
  Red,
  Green,
  Blue,
  Black
}
let c: Color = Color.Blue;
console.log(Color.Black); //输出4

//常用
enum Code{   
  NOTLOGIN=4001,
  NOTFIND=4002,
  SERVERERROR=5000
}

//any不做类型检查



//void
function hello(): void {
  alert("hello World");
}

var uf:undefined;
console.log(uf); //undefined

//null
let sss = null;


//never类型代表永不存在的值的类型，它只能被赋值为never。
// 返回 never 的函数必须有无法被执行到的终止点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值是 never
function fail() {
  return error("一些东西失败了");
}

// 返回 never 的函数必须有无法被执行到的终止点
function infiniteLoop(): never {
  while (true) {
  }
}







//多类型参数
let types_n:(string|number|boolean)
types_n = "ss"
types_n = 1
types_n = false




//控制语句

//if
var  num:number = 5
if (num > 0) { 
   console.log("数字是正数") 
}

//for
for(let i = num;i>=1;i--) {
     
 }

for(let v of ["s","ss"]){

}

for(let index in ["s","ss"]){

}

//do while
var i:number = 0;
while(i<10){
    console.log(i);
    i++;
}

//

