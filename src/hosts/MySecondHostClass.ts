import { PluginImpl1 } from "../plugins/PluginImpl1";
import { PluginImpl2 } from "../plugins/PluginImpl2";
import { PluginImpl3 } from "../plugins/PluginImpl3";
import { BasePluginHostClass } from "./BasePluginHostClass";

export type MySecondHostClassType = MySecondHostClass<[PluginImpl1, PluginImpl2, PluginImpl3]>;
export default class MySecondHostClass<P extends [PluginImpl1, PluginImpl2, PluginImpl3]> extends BasePluginHostClass<P> {
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
