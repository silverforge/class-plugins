import { BasePlugin, HostClass } from "../typedefs";

export abstract class BaseHostClass<P extends (BasePlugin)[]> implements HostClass {
  protected _plugins: P;

  constructor(plugins: P) {
    this._plugins = plugins;
  }
}