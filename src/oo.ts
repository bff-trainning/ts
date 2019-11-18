//面向对象的一些基本特征： 封装 继承 多态

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat(food: string) {
    return console.log("eat");
  }
}

let a = new Animal("dog");

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
}

//多态的表现形式 重载 重写 抽象类 接口
abstract class Human {
  constructor(readonly name: string) {}
  eat() {
      console.log("eat")
  }
}

interface IProgramer {
  codding(): void;
}

class Programer extends Human implements IProgramer {
  constructor(name: string) {
    super(name);
  }
  // #region 声明
  log(): void;
  log(arg1: string): void;
  log(arg1: number, arg2: string): void;
  // #endregion
  // 重载实现
  log(arg1?: string | number, arg2?: string) {}

  //重写
  eat() {
    super.eat();
    console.log("eat finish");
  }

  codding(): void {
    throw new Error("Method not implemented.");
  }
}








