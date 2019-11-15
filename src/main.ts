let x: number;
x = 10;
console.log(x);

//基本数局类型

//number
let n1: number = 100;
let f1: number = 100.8;

//boolean
let flag: boolean = true || false;

//string
let s: string = "123";
let s2: string = "123";
let s3: string = `123${4}`;
let s4: string = `sss
Before trying anything else you want to make sure your paths that you are using in your launch configuration are correct.
`;

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

//void
function hello(): void {
  alert("hello World");
}

//null
let sss = null;
let arr: any = ["s", 2, true];


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

