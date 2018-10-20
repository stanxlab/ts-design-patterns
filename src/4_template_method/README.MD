
## 模板方法模式

> Template Method Pattern  
> Define the skeleton of an algorithm in an operation, deferring some steps to subclassed. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.(定义一个操作中的算法的框架,而将一些步骤延迟到子类中. 使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤.)

### 优点:
- 封装不可变部分,扩展可变部分
- 提取公共部分代码,便于维护
- 行为由父类控制,子类实现

### 缺点
- 一般抽象类负责声明最抽象的属性/方法,实现类做具体实现. 但是模板方法模式颠倒了,抽象类定义了部分抽象方法,由子类实现,之类的执行结果影响了父类的结果,也就是子类对父类产生了影响,这在复杂的项目中会带来代码阅读的难度.

### 使用场景
- 多个子类有公有的方法,并且逻辑基本相同时
- 重要,复杂的算法, 可以把核心算法设计为模板方法, 周边的相关细节功能则由各个子类实现
- 重构时,模板方法模式很常用, 把相同代码抽取到父类中,然后通过钩子函数约束其行为
- 解决父类调用子类方法的问题
