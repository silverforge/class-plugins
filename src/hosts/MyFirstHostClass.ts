import { PluginImpl1 } from "../plugins/PluginImpl1";
import { PluginImpl2 } from "../plugins/PluginImpl2";
import { BasePluginHostClass } from "./BasePluginHostClass";

export type MyFirstHostClassType = MyFirstHostClass<[PluginImpl1, PluginImpl2]>;
export default class MyFirstHostClass<P extends [PluginImpl1, PluginImpl2]> extends BasePluginHostClass<P> {
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
