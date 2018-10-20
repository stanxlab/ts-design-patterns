

// 产品类
export class Product {
    private sequence = ['a', 'b', 'c']; // 例如模拟产品的组装顺序序列
    public doSomething(): void {
        // 独立业务逻辑
        console.log(`Product - [${this.sequence}] doSomething...`);
    }
    public setSequence(sequence) {
        this.sequence = sequence;
    }
}

// 抽象建造者
export abstract class Builder {
    // 设置产品的不同部分, 以获得不同的产品
    public abstract setPart(sequence);

    // 建造产品
    public abstract buildProduct(): Product;
}

// 具体建造者
export class ConcreteBuilder extends Builder {
    private product: Product = new Product();
    // 设置产品零件
    public setPart(sequence) {
        this.product.setSequence(sequence);
    }

    // 建造产品
    public buildProduct(): Product {
        return this.product;
    }
}

// 导演类
export class Director {
    private builder: Builder = new ConcreteBuilder();

    // 获取A产品
    public getProductA(): Product {
        let sequence = ['A', 'A'];
        this.builder.setPart(sequence);
        return this.builder.buildProduct();
    }

    // 获取B产品
    public getProductB(): Product {
        let sequence = ['B', 'B'];
        this.builder.setPart(sequence);
        return this.builder.buildProduct();
    }
}

// 客户端调用

let director = new Director();
director.getProductA().doSomething();
director.getProductB().doSomething();

/**
 * Output:
Product - [A,A] doSomething...
Product - [B,B] doSomething...
 */