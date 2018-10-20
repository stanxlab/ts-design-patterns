
# 建造者模式(生成器模式)
> Builder Pattern
> Separate the construction of a complex object from its representation so that the same construction process can create different representations. (将一个复杂的对象构建与它的表示分离, 使得同样的构建过程可以创建不同的表示.)


## 通用模式 - [./a_common.ts](./a_common.ts)

 ![通用类图](../../assets/builder_a_common_1.png)


在建造者模式中, 有如下4个角色
- `Product` 产品类
- `Builder` 抽象建造者
- `ConcreteBuilder` 具体建造者
- `Director` 导演类

执行示例代码
```
ts-node a_common.ts
```


## 书中示例

### 未使用建造者模式时 [./b_no_builder.ts](./b_no_builder.ts)
- 此示例是基于 [模板方法模式](../4_template_method/README.MD)

> 新需求: 车模需要能够按照指定的顺序执行各个方法



