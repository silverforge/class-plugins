import { HostClass, Plugin } from "../typedefs";

export abstract class BasePlugin implements Plugin {
  protected _classInstance: HostClass | undefined = undefined;

  get hostClassRef() {
    return this._classInstance;
  }

  init(hostClass: HostClass) {
    if (!this._classInstance) {
      this._classInstance = hostClass;
    }
  }
}