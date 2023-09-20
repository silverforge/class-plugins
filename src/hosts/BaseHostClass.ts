import { HostClass, Plugin } from "../typedefs";

export abstract class BaseHostClass<P extends (Plugin)[]> implements HostClass {
  protected _plugins: P;

  constructor(plugins: P) {
    this._plugins = plugins;
  }
}