import { HummerModel } from "./HummerModel";

// 悍马 H2 车型, 特殊要求,可以控制鸣笛

export class HummerH2Model extends HummerModel {
    private alarmFlag: Boolean = true; // 默认需要鸣笛
    protected alarm() {
        console.log('悍马H2 鸣笛...');
    }
    protected start() {
        console.log('悍马H2 启动...');
    }
    protected stop() {
        console.log('悍马H2 停车...');
    }
    protected engineBoom() {
        console.log('悍马H2 引擎声响...');
    }

    // 重写父类的方法
    protected isAlarm(): Boolean {
        return this.alarmFlag;
    }

    // 钩子方法, 用户设置是否需要鸣笛
    public setAlarm(isAlarm: Boolean) {
        this.alarmFlag = isAlarm;
    }

}