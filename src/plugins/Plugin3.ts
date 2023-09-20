import { HostClass, Plugin3 } from "../typedefs";

export class PluginImpl3 implements Plugin3 {
  private _classInstance: HostClass | undefined = undefined;
  private _color: string;

  constructor(color: string) {
    this._color = color;
  }

  get color() {
    return this._color;
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
