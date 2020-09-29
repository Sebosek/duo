import {Component, h, Method, Prop} from "@stencil/core";
import {State} from "./state";
import {Validatable} from "./validatable";

@Component({
  tag: 'duo-timer',
  shadow: true,
})
export class Timer implements Validatable {
  @Prop({ reflect: true, mutable: true }) state: State = 'init';
  @Prop({ reflect: true }) desired: State = 'success';

  render() {
    if (this.state === 'running') return (
      <duo-validation-message type="info">
        <slot name="pending" />
      </duo-validation-message>
    );

    if (this.state === 'success') return (
      <duo-validation-message type="success">
        <slot name="success" />
      </duo-validation-message>
    );

    if (this.state === 'failed') return (
      <duo-validation-message type="error">
        <slot />
      </duo-validation-message>
    );

    return null;
  }

  @Method()
  async validate() {
    console.log('timer >> current state at beginning', this.state);

    if (!['init', 'success'].includes(this.state)) {
      console.log('timer >> currently running', this.state);
      return;
    }

    this.state = 'running';
    await this.timer();
    this.state = this.desired;
  }

  private timer() {
    return new Promise((resolve) => {
      setTimeout(function() {
        resolve();
      }, 3000);
    });
  }
}
