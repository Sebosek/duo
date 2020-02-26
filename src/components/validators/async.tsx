import {Component, h, Method, Prop, Event, EventEmitter} from "@stencil/core";
import {State} from "./state";
import {Validatable} from "./validatable";
import {AsyncValidatorEvent} from "./asyncValidatorEvent";

@Component({
  tag: 'duo-async',
  shadow: true,
})
export class Async implements Validatable {
  @Prop({ reflect: true, mutable: true }) state: State = 'init';

  @Event({ eventName: 'run-validation' }) event: EventEmitter<AsyncValidatorEvent>;

  private _value: string | string[] | number | null = null;

  render() {
    if (this.state === 'failed') return (
      <duo-validation-message type="error">
        <slot />
      </duo-validation-message>
    );

    if (this.state === 'success') return (
      <duo-validation-message type="success">
        <slot name="success" />
      </duo-validation-message>
    );

    if (this.state === 'running') return (
      <duo-validation-message type="info">
        <slot name="pending" />
      </duo-validation-message>
    );

    return null;
  }

  @Method()
  validate(value: string | number | string[]): Promise<void> {
    if (this.isValueSame(value)) return;

    this.state = 'running';
    this.event.emit({ value });

    this._value = value;
    return Promise.resolve();
  }

  private isValueSame(value: string | number | string[]) {
    if (Array.isArray(value) && Array.isArray(this._value)) {
      const arr = Array.from(this._value);

      return Array.from(value).some(v => arr.includes(v));
    }

    return value === this._value;
  }
}
