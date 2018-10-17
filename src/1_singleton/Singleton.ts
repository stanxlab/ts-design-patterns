
// 单例模式

export default class Singleton {
    private static instance: Singleton = new Singleton();

    // 构造函数声明为私有,外部不能使用 `new`关键字实例化
    private constructor() {

    }

    public static getInstance(): Singleton {
        return this.instance;
    }

    public doSomething() {
        console.log('Singleton doSomething...');
    }
}
