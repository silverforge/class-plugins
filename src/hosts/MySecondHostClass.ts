import { HostClass, Plugin1, Plugin2, Plugin3 } from "../typedefs";
import { BaseHostClass } from "./BaseHostClass";

export type MySecondHostClassType = MySecondHostClass<[Plugin1, Plugin2, Plugin3]>;

export default class MySecondHostClass<P extends [Plugin1, Plugin2, Plugin3]> extends BaseHostClass<P> {
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

  get plugin3() {
    return this._plugins[2];
  }

  classFunction2() {
    return 'class function host 2';
  }
}
