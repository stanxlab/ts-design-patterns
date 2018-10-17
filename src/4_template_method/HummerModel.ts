
// 悍马模型, 抽象类
export abstract class HummerModel {
    public run(): void {
        // 发动
        this.start();
        // 引擎轰鸣
        this.engineBoom();
        // 喇叭是否响起
        if (this.isAlarm()) {
            this.alarm();
        }
        // 停车
        this.stop();
    }

    protected abstract start();
    protected abstract engineBoom();
    protected abstract alarm();
    protected abstract stop();

    // 钩子方法, 默认喇叭是会响的
    protected isAlarm(): Boolean {
        return true;
    }
}