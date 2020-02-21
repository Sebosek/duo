import { JsxElement } from "typescript";

export interface IconRenderer {
  icon: string;

  render(): JsxElement;
}
