import {Component, Host, h, Prop, Watch} from "@stencil/core";

@Component({
  tag: "duo-input",
  styleUrl: "input.css",
  scoped: true
})
export class Input {
  private input!: HTMLInputElement;

  @Prop({ reflect: true }) placeholder: string;
  @Prop({ reflect: true }) type: string;
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) readonly: boolean;
  @Prop({ reflect: true, mutable: true }) value: string | number;
  @Prop({ reflect: true, mutable: true }) focused: boolean;

  @Watch("focused")
  watchFocus(newValue: boolean) {
    if (!newValue) return;

    this.input.focus();
  }

  render() {
    return (
      <Host>
        <div class="extra">
          <slot name="prefix" />
        </div>

        <div class="extra">
          <slot name="suffix" />
        </div>

        <input
          type={this.type}
          placeholder={this.placeholder}
          name={this.name}
          value={this.value}
          onInput={this.setValue}
          disabled={this.disabled}
          readonly={this.readonly}
          ref={(el: HTMLInputElement) => this.input = el}
        />

        {/*<div class="addon">*/}
        {/*  <slot name="suffix" />*/}
        {/*</div>*/}
      </Host>
    );
  }

  private setValue(ev: any) {
    this.value = ev.target.value;
  }
}
