import {Component, Event, Host, h, Prop, Watch, EventEmitter, Listen} from '@stencil/core';

@Component({
  tag: "duo-checkbox",
  styleUrl: "checkbox.css",
  scoped: true
})
export class Checkbox {
  private activationKeys = [' ', 'Enter'];
  private definedIndex = 0;

  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) value: string | number;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true, mutable: true }) tabindex: number = 0;
  @Prop({ reflect: true, mutable: true }) checked: boolean = false;
  @Prop({ reflect: true, mutable: true }) intermediate: boolean = false;

  @Watch('disabled')
  watchDisabled(newValue: boolean) {
    if (newValue) {
      this.definedIndex = this.tabindex;
      this.tabindex = -1;
    }
    else {
      this.tabindex = this.definedIndex;
    }
  }

  @Event() changed: EventEmitter<string | number | boolean>;

  @Listen('click')
  handleClick(ev: MouseEvent) {
    ev.stopPropagation();
    this.toggle();
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (!this.activationKeys.includes(ev.key)) return;

    this.toggle();
  }

  componentWillLoad() {
    this.watchDisabled(this.disabled)
  }

  render() {
    return (
      <Host>
        <input
          type="checkbox"
          checked={this.checked}
          name={this.name}
          value={this.value}
          disabled={this.disabled}
        />
        <div class="control">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"/>
            </g>
          </svg>
        </div>
      </Host>
    );
  }

  private toggle() {
    if (this.disabled) return;

    this.checked = !this.checked;
    this.intermediate = false;

    const value = !this.checked || (this.value || true);
    this.changed.emit(value)
  }
}
