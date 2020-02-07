import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "duo-button",
  styleUrl: "button.css",
  scoped: true
})
export class Button {
  @Prop({ reflect: true }) label: string;
  @Prop({ reflect: true }) disabled: boolean;

  render() {
    return (
      <Host>
        {this.label && <button disabled={this.disabled}>{this.label}</button>}
      </Host>
    );
  }
}
