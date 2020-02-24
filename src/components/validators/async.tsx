import {Component, h, Method, Prop, Event, EventEmitter, Watch} from "@stencil/core";
import {State} from "./state";
import {Validatable} from "./validatable";
import {AsyncValidatorEvent} from "./asyncValidatorEvent";

@Component({
  tag: 'duo-async',
  shadow: true,
})
export class Async implements Validatable {
  @Prop({ reflect: true, mutable: true }) state: State = 'init';
  @Prop({ reflect: true, mutable: true }) succeeded: boolean = false;

  @Event({ eventName: 'run-validation' }) event: EventEmitter<AsyncValidatorEvent>;

  @Watch('succeeded')
  watchSucceeded(newValue: boolean) {
    console.log('async >> watch >>', this.state);
    if (this.state !== 'running') return;

    this.state = newValue ? 'success' : 'failed';
    console.log('async >> watch >> new state >>', this.state);
  }

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
    console.log('async >> validate >>', this.state);
    if (this.state === 'running') return;

    this.state = 'running';
    this.event.emit({ value });

    console.log('async >> validate >> new state >>', this.state);
    return Promise.resolve();
  }

  // private x() {
  //   return (
  //     this.state === 'success' && this.succeeded ||
  //     this.state === 'failed' && !this.succeeded
  //   );
  // }
}
