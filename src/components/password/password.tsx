import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: "duo-password"
})
export class Password {
  @Prop({ reflect: true }) placeholder: string;
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true, mutable: true }) value: string | number;
  @Prop({ reflect: true, mutable: true }) focused: boolean;
  @Prop({ reflect: true, mutable: true }) readable: boolean = false;

  render() {
    const icon = this.readable ? "close-eye" : "open-eye";

    return (
      <duo-input
        disabled={this.disabled}
        focused={this.focused}
        name={this.name}
        placeholder={this.placeholder}
        type={this.readable ? "text" : "password"}
        value={this.value}
      >
        <duo-control
          slot="suffix"
          onClick={() => this.readable = !this.readable}
        >
          <duo-icon icon={icon}></duo-icon>
        </duo-control>
      </duo-input>
    );
  }
}
