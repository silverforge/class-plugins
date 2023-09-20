import { Plugin2 } from "../typedefs";
import { BasePlugin } from "./BasePlugin";

export class PluginImpl2 extends BasePlugin implements Plugin2 {
  private _carType: string;

  constructor(carType: string) {
    super();
    this._carType = carType;
  }

  get carType() {
    return this._carType;
  }
}
