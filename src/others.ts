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
interface IProgramer {
    length: number;
}

function Program<T extends IProgramer>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

//2  需要引用构造函数的类类型
function create<T>(c: {new(): T; }): T {
    return new c();
}




//接口







//注解（装饰器）

//装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。
// 装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，
//被装饰的声明信息做为参数传入。

function ss(target:any ,propertyKey:string,descriptor:PropertyDecorator){

}

//类装饰器








//方法装饰器




//属性装饰器



//参数装饰器