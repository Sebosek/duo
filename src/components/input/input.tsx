import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "duo-input",
  styleUrl: "input.css",
  scoped: true
})
export class Input {
  @Prop({ reflect: true }) placeholder: string;
  @Prop({ reflect: true }) type: string;
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true, mutable: true }) value: string | number;

  render() {
    return (
      <Host>
        <div class="addon">
          <div class="control">
            <slot name="prefix" />
          </div>
        </div>

        <input
          type={this.type}
          placeholder={this.placeholder}
          name={this.name}
          value={this.value}
          onInput={this.setValue}
          disabled={this.disabled}
        />

        <div class="addon">
          <div class="control">
            <slot name="sufix" />
          </div>
        </div>
      </Host>
    );
  }

  private setValue(ev: any) {
    this.value = ev.target.value;
  }
}
