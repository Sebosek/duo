import {Component, Event, Host, h, Prop, Watch, EventEmitter, Listen} from '@stencil/core';

@Component({
  tag: "duo-radio",
  styleUrl: "radio.css",
  scoped: true
})
export class Radio {
  private activationKeys = [' ', 'Enter'];
  private definedIndex = 0;
  private radio!: HTMLInputElement;

  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true, mutable: true }) checked: boolean = false;
  @Prop({ reflect: true, mutable: true }) value: string | number;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) tabindex: number = 0;

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

  @Event() selected: EventEmitter<void | string | number>;

  @Listen('click')
  handleSelect() {
    this.radio.checked = true;
    this.selected.emit(this.value)
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (!this.activationKeys.includes(ev.key)) return;

    this.handleSelect();
  }

  componentWillLoad() {
    this.watchDisabled(this.disabled)
  }

  componentDidLoad() {
    if (this.checked) {
      this.handleSelect()
    }
  }

  render() {
    return (
      <Host>
        <input
          type="radio"
          name={this.name}
          value={this.value}
          ref={(el: HTMLInputElement) => this.radio = el}
        />
        <div class="control">
          <div class="target" />
        </div>
      </Host>
    );
  }
}
