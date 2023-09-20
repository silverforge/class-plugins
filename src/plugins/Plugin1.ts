import { HostClass, Plugin1 } from "../typedefs";

export class PluginImpl1 implements Plugin1 {
  private _classInstance: HostClass | undefined = undefined;
  private _fruitName: string;

  constructor(fruitName: string) {
    this._fruitName = fruitName;
  }

  get fruitName() {
    return this._fruitName;
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
