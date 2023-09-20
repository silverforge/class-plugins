import { HostClass, Plugin2 } from "../typedefs";

export class PluginImpl2 implements Plugin2 {
  private _classInstance: HostClass | undefined = undefined;
  private _carType: string;

  constructor(carType: string) {
    this._carType = carType;
  }

  get carType() {
    return this._carType;
  }

  get hostClassRef() {
    return this._classInstance;
  }

  init(hostClass: HostClass) {
    if (!this._classInstance) {
      this._classInstance = hostClass;
    }
  }
}
