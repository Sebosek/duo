import {Component, h, Method, Prop} from "@stencil/core";
import {State} from "./state";
import {Validatable} from "./validatable";

@Component({
  tag: 'duo-timer',
  shadow: true,
})
export class Timer implements Validatable {
  @Prop({ reflect: true, mutable: true }) state: State = 'init';

  render() {
    if (this.state === 'running') return (
      <duo-validation-message type="info">Running&hellip;</duo-validation-message>
    );

    if (this.state === 'success') return (
      <duo-validation-message type="success"><slot /></duo-validation-message>
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
    this.state = 'success';
  }

  private timer() {
    return new Promise((resolve) => {
      setTimeout(function() {
        resolve();
      }, 3000);
    });
  }
}
