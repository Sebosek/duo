import {Component, h, Host, Method, Prop} from "@stencil/core";
import {State} from "./state";
import {Validatable} from "./validatable";

@Component({
  tag: 'duo-required',
  shadow: true,
})
export class Required implements Validatable {
  @Prop({ reflect: true, mutable: true }) state: State = 'init';

  render() {
    if (this.state !== 'failed') return null;

    return (
      <Host>
        <duo-validation-message type="error"><slot /></duo-validation-message>
      </Host>
    );
  }

  @Method()
  validate(value: string | number | string[]): Promise<void> {
    console.log('required >> current state at beginning', this.state);

    if (this.state === 'failed' && value) this.state = 'init';
    if (!value) this.state = 'failed';

    console.log('required >> current state at the end', this.state);
    return Promise.resolve();
  }
}
