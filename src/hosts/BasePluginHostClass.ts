import { Plugin } from "../typedefs";
import { BaseHostClass } from "./BaseHostClass";

export abstract class BasePluginHostClass<P extends (Plugin)[]> extends BaseHostClass<P> {
  constructor(plugins: P) {
    super(plugins);
    this._plugins.forEach(p => p.init(this));
  }
}