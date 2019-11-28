import {of} from 'rxjs'
import { basename } from 'path';
of(1,2,3).subscribe(x => console.log(x + '!!!')); // etc
console.log("asss");

//（trait其他语言）
//属性接口
interface Configuration{
    host?:string;
    port:number;
    appkey:string | undefined
    appvalue:string
}

var config:Configuration = {
    host : process.env.HOST,
    port:8080,
    appkey: process.env.APPKEY,
    appvalue:""
};

var f = ()=>{

}


//函数类型接口 对方法的参数和返回值进行约束
interface Repository{
    (key:string,value:string):string;
}

var md5:Repository = (key:string,value:string):string=>{
    return key;
};


//可索引接口 对数组 对象 的约束  （不常用）

//定义一个数组
var arr:number[]=[2345.2554];

interface UserArr{
    [index:number]:string
}
var arr2:UserArr = ["123","222"];
console.log(arr[0]);

interface UserObj{
    [index:string]:string
}

var uaer:UserObj={name:'张三',age: 12};


//类类型接口 和抽象类 有点相似
interface Animal{
    name:string
    eat(str:string):void
}


class Dog implements Animal{
    //name: string;    
    constructor(private age:number,public name:string){
        this.name = name;
    
        
    }
    eat(str: string): void {
        
        throw new Error("Method not implemented.");
    }


}


//接口扩展。接口可以继承接口
interface Person extends Animal{

}



