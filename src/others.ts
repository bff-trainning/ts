//泛型

//同一块代码可以支持多种数据类型
function Indentity<T>(arg:T): T {
    return arg;
}

//常用
class BaseRepository{

    //泛型方法
    Add<T>(t:T){
        return true;
    }
}

interface BaseResponse<T>{
    code :number ;
    msg :string;
    data: T;
}


//泛型函数
function Indentity2<T>(arg:T): T {
    return arg;
}


//泛型接口

interface GenericIdentityFn {
    <T>(arg: T): T;
}

var fn : GenericIdentityFn= function identity<T> (arg:T):T{
    return arg;
}


//泛型类
class GenericNumber<T> {
    zeroValue: T | undefined;
    add: ((x: T, y: T) => T) | undefined;  
}

let myGenericNumber = new GenericNumber<number>();


//泛型约束


//1 一般
interface IProgramer2 {
    length: number;
}

function Program<T extends IProgramer2>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

//2  需要引用构造函数的类类型
function create<T>(c: {new(): T; }): T {
    return new c();
}




//接口

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

var argg3:UserArr = ["123","222"];
console.log(arr[0]);

interface UserObj{
    [index:string]:string
}

var uaer:UserObj={name:'张三',age: "12"};


//类类型接口 和抽象类 有点相似
interface Animal{
    name:string
    eat(str:string):void
}


class Cat implements Animal{
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





//注解（装饰器）

//装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。
// 装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，
//被装饰的声明信息做为参数传入。
function Path(target:any) {
    console.log("I am decorator.")
}

@Path
class HelloService {}



//
function Path2(p1: string, p2: string) {
    return function (target:any) { //  这才是真正装饰器
        // do something 
    }
}

@Path2("/hello", "world")
class HelloService2 {}


//类装饰器
function Path3(path: string) {
    return function (target: Function) {
        !target.prototype.$Meta && (target.prototype.$Meta = {})
        target.prototype.$Meta.baseUrl = path;
    };
}

@Path3('/hello')
class HelloService3 {
    name:string = "";
    constructor() {}
}

console.log(HelloService3.prototype.name);// 输出：{ baseUrl: '/hello' }
let hello3 = new HelloService3();
console.log(hello3.name) // 输出：{ baseUrl: '/hello' }





//方法装饰器

function GET(url: string) {
    return function (target:any, methodName: string, descriptor: PropertyDescriptor) {
        !target.$Meta && (target.$Meta = {});
        target.$Meta[methodName] = url;
    }
}


class HelloService4 {
    constructor() { }
    @GET("xx")
    getUser() { }
}

console.log((<any>HelloService).$Meta);




//参数装饰器
function PathParam(paramName: string) {
    return function (target:any, methodName: string, paramIndex: number) {
        !target.$Meta && (target.$Meta = {});
        target.$Meta[paramIndex] = paramName;
    }
}

class HelloService5 {
    constructor() { }
    getUser( @PathParam("userId") userId: string) { }
}

console.log((<any>HelloService).prototype.$Meta); // {'0':'userId'}





//参数装饰器