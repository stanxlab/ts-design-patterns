import { BenzBuilder, BMWBuilder, CarBuilder } from "./carBuilder";
import { CarModel } from "./carModels";

const { ACTION_TYPE } = CarModel;

export class Director {
    private sequence: Array<String> = [];
    private benzBuilder: BenzBuilder = new BenzBuilder();
    private bmwBuilder: BMWBuilder = new BMWBuilder();

    private _clearSequence() {
        this.sequence = [];
    }

    public getABenzModel(): CarModel {
        this._clearSequence();
        this.sequence.push(ACTION_TYPE.start);
        this.sequence.push(ACTION_TYPE.stop);
        this.benzBuilder.setSequence(this.sequence);
        return this.benzBuilder.getCarModel();
    }

    public getBBenzModel(): CarModel {
        this._clearSequence();
        this.sequence.push(ACTION_TYPE.start);
        this.sequence.push(ACTION_TYPE.alarm);
        this.sequence.push(ACTION_TYPE.stop);
        this.benzBuilder.setSequence(this.sequence);
        return this.benzBuilder.getCarModel();
    }

    public getCBMWModel(): CarModel {
        this._clearSequence();
        this.sequence.push(ACTION_TYPE.start);
        this.sequence.push(ACTION_TYPE.engineBoom);
        this.sequence.push(ACTION_TYPE.stop);
        this.bmwBuilder.setSequence(this.sequence);
        return this.bmwBuilder.getCarModel();
    }

    public getDBMWModel(): CarModel {
        this._clearSequence();
        this.sequence.push(ACTION_TYPE.start);
        this.sequence.push(ACTION_TYPE.stop);
        this.bmwBuilder.setSequence(this.sequence);
        return this.bmwBuilder.getCarModel();
    }
}

