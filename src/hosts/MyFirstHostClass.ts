import { HostClass, Plugin1, Plugin2 } from "../typedefs";

export type MyFirstHostClassType = MyFirstHostClass<[Plugin1, Plugin2]>;

export default class MyFirstHostClass<P extends [Plugin1, Plugin2]> implements HostClass {
  private _plugins: P;

  constructor(plugins: P) {
    this._plugins = plugins;
  }

  get plugin1() {
    this._plugins[0].init(this);
    return this._plugins[0];
  }

  get plugin2() {
    this._plugins[1].init(this);
    return this._plugins[1];
  }

  classFunction1() {
    return 'class function host 1';
  }
}
