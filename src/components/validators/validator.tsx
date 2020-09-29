import {Component, Element, h, Host, Listen, State} from "@stencil/core";
import {Validatable} from "./validatable";

enum Status {
  Pristine, // Initial state
  Touched, // Ready to run validations
  Valid, // Input value is fine
  Running, // Live validations
}

// Duo declarative validator
//
// When a focus event is captured, validator come into 'touched', if previous state was 'pristine'.
// When one of following events are fired from within validator, validator ...

@Component({
  tag: 'duo-validator',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
  scoped: true,
})
export class Validator {
  @Element() node: HTMLElement;

  private _state: Status = Status.Pristine;
  private _observer: MutationObserver = null;
  private _validators: Array<Element> = [];
  private _immediate: Array<Element> = [];

  @State() error: boolean;

  @Listen('focusin')
  focusHandler() {
    if (this._state === Status.Pristine) {
      // Transition to touched state on first touch
      this._state = Status.Touched;
      return;
    }
  }

  @Listen('focusout')
  async blurHandler(ev: UIEvent) {
    const target = ev.target as HTMLInputElement;
    const value = target.value || '';

    await this.validate(value);
  }

  @Listen('input')
  async inputHandler(ev: UIEvent) {
    const target = ev.target as HTMLInputElement;
    const value = target.value || '';

    await Promise.all([this.immediate(value), this.validate(value)]);
  }

  componentDidLoad() {
    this._immediate = Array.from(this.node.querySelectorAll('[data-duo-validator=immediate]'));
    this._validators = Array.from(this.node.querySelectorAll('[data-duo-validator]'));

    const config = {attributes: true, childList: true, subtree: true};
    this._observer = new MutationObserver(this.mutations.bind(this));
    this._observer.observe(this.node, config);
  }

  componentDidUnload() {
    this._observer.disconnect();
  }

  render() {
    return (
      <Host
        class={{
          'error': this.error,
        }}
      >
        <slot />
      </Host>
    );
  }

  private async immediate(value: string | string[] | number): Promise<void> {
    const validators = this._immediate.map(el => el as Partial<Validatable>).filter(v => !!v.validate);

    // console.log('running immediate validators', validators);
    await Promise.all(validators.map(v => v.validate(value)));
  }

  private async validate(value: string | string[] | number): Promise<void> {
    // Escape while validator is in touched state
    if (this._state === Status.Pristine) return;

    const validators = this._validators.map(el => el as Partial<Validatable>).filter(v => !!v.validate);

    // console.log('running validators', validators);
    await Promise.all(validators.map(v => v.validate(value)));
  }

  private mutations(mutations: MutationRecord[]) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        // change at elements
        this._validators = Array.from(this.node.querySelectorAll('[data-duo-validator]'));
        this._immediate = Array.from(this.node.querySelectorAll('[data-duo-validator=immediate]'));

        return;
      }

      if (mutation.type === 'attributes' && mutation.attributeName === 'state') {
        // change at some state attribute inside validator
        const validators = Array.from(this.node.querySelectorAll('[data-duo-validator]'));
        const error = validators.some(v => v.getAttribute('state') === 'failed');

        this._state = !error ? Status.Valid : Status.Running;
        this.error = error;
      }
    })
  }
}
