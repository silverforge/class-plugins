import { Plugin3 } from "../typedefs";
import { BasePlugin } from "./BasePlugin";

export class PluginImpl3 extends BasePlugin implements Plugin3 {
  private _color: string;

  constructor(color: string) {
    super();
    this._color = color;
  }

  get color() {
    return this._color;
  }
}
