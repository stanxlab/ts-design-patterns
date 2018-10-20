import { CarModel, BenzModel, BMWModel } from "./carModels";

// 场景类
class Client {
    public static main() {
        // 按要求制造奔驰车模型
        const benz = new BenzModel();
        let sequence = [];
        sequence.push(CarModel.ACTION_TYPE.engineBoom);
        sequence.push(CarModel.ACTION_TYPE.start);
        sequence.push(CarModel.ACTION_TYPE.stop);
        benz.setSequence(sequence);
        benz.run();
        console.log('==========');

        // 按要求制造宝马车模型
        const bmw = new BMWModel();
        sequence = [];
        sequence.push(CarModel.ACTION_TYPE.start);
        sequence.push(CarModel.ACTION_TYPE.engineBoom);
        sequence.push(CarModel.ACTION_TYPE.alarm);
        sequence.push(CarModel.ACTION_TYPE.stop);
        bmw.setSequence(sequence);
        bmw.run();
    }
}
// 执行代码
Client.main();

/**
 * Output:
奔驰车 引擎声响...
奔驰车 启动...
奔驰车 停车...
==========
宝马车 启动...
宝马车 引擎声响...
宝马车 鸣笛...
宝马车 停车...
 */