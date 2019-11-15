//声明
function greetName(name:string):string{
    return name;
}

var greetName2 = (name:string)=>{
    return name;
}
let greetName3 : (name:string)=> string;
greetName3 = greetName;


let greetName4 = (name:string,f:(name:string)=> string)=>{
    f(name);
}
greetName4("小明",greetName3)




//可选参数
let Add = (f1:number,f2:number,f3?:number):number=>{
    let result = f1+f2;
    if(f3!==undefined){
        result+=f3
    }
    return result;
}

//默认参数
let Add2 = (f1:number,f2:number,f3:number = 100):number=>{
    return f1+f2+f3;
}
Add2(10,20);
//
let Add3 = (f1:number,f2:number,f3:number = 100):number=>{
    return f1+f2+f3;
}

//剩余参数
let Add4 = (...f3s:number[])=>{

}

Add4(2,2,2,2,2,2,2);



//Typescript异步编程
//回调地狱
function loadJson(url:string,args:any, cb:(data:string)=>void,errcb:(error:Error)=>void){
    
}

function jsonToHtml(template:string,json:string,cb: (data:string)=>void,errcb:(error:Error)=>void){

}

function appendHtml(html:string,cb: (data:string)=>void,errcb:(error:Error)=>void){

}



function render(cb:(data:string)=>void,errcb:(err:Error)=>void){
    try{
        loadJson("www.baidu.com","search",(json)=>{
            jsonToHtml("<h1>{{title}}</h1>",json,(html)=>{
                appendHtml(html,cb,
                errcb);
            },errcb);
        },errcb);
    }catch(e){
        errcb(e)
    }
}














