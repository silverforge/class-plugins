import { HostClass, Plugin1, Plugin2 } from "../typedefs";
import { BaseHostClass } from "./BaseHostClass";

export default class MyFirstHostClass<P extends [Plugin1, Plugin2]> extends BaseHostClass<P> {
  constructor(plugins: P) {
    super(plugins);
    this._plugins.forEach(p => p.init(this));
  }

  get plugin1() {
    return this._plugins[0];
  }

  get plugin2() {
    return this._plugins[1];
  }

  classFunction1() {
    return 'class function host 1';
  }
}
