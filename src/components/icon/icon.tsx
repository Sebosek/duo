import { Component, h, Host, Prop } from '@stencil/core';
import {
  CloseEyeRenderer, IconRenderer, OpenEyeRenderer, SuccessRenderer, ErrorRenderer, InfoRenderer
} from "./renderers";

@Component({
  tag: 'duo-icon',
  styleUrl: 'icon.css',
  shadow: true
})
export class Icon {
  @Prop() icon: string;

  private renderers: Array<IconRenderer> = [
    new OpenEyeRenderer(),
    new CloseEyeRenderer(),
    new SuccessRenderer(),
    new ErrorRenderer(),
    new InfoRenderer(),
  ];

  render() {
    const renderer = this.renderers.find(r => this.icon === r.icon);
    if (!renderer) {
      console.error(`Icon '${this.icon}' is not found.`);

      return null;
    }

    return <Host>{renderer.render()}</Host>;
  }
}
