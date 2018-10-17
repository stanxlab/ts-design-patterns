import { HummerModel } from "./HummerModel";

// 悍马 H1 车型, 没有特殊要求

export class HummerH1Model extends HummerModel {
    protected alarm() {
        console.log('悍马H1 鸣笛...');
    }
    protected start() {
        console.log('悍马H1 启动...');
    }
    protected stop() {
        console.log('悍马H1 停车...');
    }
    protected engineBoom() {
        console.log('悍马H1 引擎声响...');
    }
}