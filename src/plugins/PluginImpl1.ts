import { Plugin1 } from "../typedefs";
import { BasePlugin } from "./BasePlugin";

export class PluginImpl1 extends BasePlugin implements Plugin1 {
  private _fruitName: string;

  constructor(fruitName: string) {
    super();
    this._fruitName = fruitName;
  }

  get fruitName() {
    return this._fruitName;
  }
}
