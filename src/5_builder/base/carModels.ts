
// 产品模型类

// 车辆模型的抽象类
export abstract class CarModel {
    private sequence: Array<String> = [];

    // 定义可以预设的 action
    public static ACTION_TYPE = {
        start: 'start',
        engineBoom: 'engineBoom',
        alarm: 'alarm',
        stop: 'stop',
    };

    protected abstract start();
    protected abstract engineBoom();
    protected abstract alarm();
    protected abstract stop();

    public setSequence(sequence: Array<String>): void {
        this.sequence = sequence;
    }

    // 按照预设的顺序执行
    public run(): void {
        // console.debug('this.sequence: ', this.sequence);
        for (let str of this.sequence) {
            switch (str) {
                case CarModel.ACTION_TYPE.start:
                    // 发动
                    this.start();
                    break;
                case CarModel.ACTION_TYPE.engineBoom:
                    // 引擎轰鸣
                    this.engineBoom();
                    break;
                case CarModel.ACTION_TYPE.alarm:
                    // 喇叭响起
                    this.alarm();
                    break;
                case CarModel.ACTION_TYPE.stop:
                    // 停车
                    this.stop();
                    break;
            }
        }

    }
}

// 奔驰车模型
export class BenzModel extends CarModel {
    protected alarm() {
        console.log('奔驰车 鸣笛...');
    }
    protected start() {
        console.log('奔驰车 启动...');
    }
    protected stop() {
        console.log('奔驰车 停车...');
    }
    protected engineBoom() {
        console.log('奔驰车 引擎声响...');
    }
}

// 宝马车模型
export class BMWModel extends CarModel {
    protected alarm() {
        console.log('宝马车 鸣笛...');
    }
    protected start() {
        console.log('宝马车 启动...');
    }
    protected stop() {
        console.log('宝马车 停车...');
    }
    protected engineBoom() {
        console.log('宝马车 引擎声响...');
    }
}
