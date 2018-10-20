import { CarModel, BenzModel, BMWModel } from "./carModels";


// 抽象汽车组装者
export abstract class CarBuilder {
    public static ACTION_TYPE = CarModel.ACTION_TYPE;
    public abstract setSequence(sequence: Array<String>);

    public abstract getCarModel(): CarModel;
}


// 奔驰车组装者
export class BenzBuilder extends CarBuilder {
    private benz: BenzModel = new BenzModel();
    public getCarModel(): CarModel {
        return this.benz;
    }
    public setSequence(sequence) {
        this.benz.setSequence(sequence);
    }
}
// 宝马车组装者
export class BMWBuilder extends CarBuilder {
    private bmw: BMWModel = new BMWModel();
    public getCarModel(): CarModel {
        return this.bmw;
    }
    public setSequence(sequence) {
        this.bmw.setSequence(sequence);
    }
}