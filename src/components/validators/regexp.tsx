import {Component, h, Host, Method, Prop} from "@stencil/core";
import {State} from "./state";
import {Validatable} from "./validatable";

@Component({
  tag: 'duo-regexp',
  shadow: true,
})
export class RegExpValidator implements Validatable {
  @Prop({ reflect: true, mutable: true }) state: State = 'init';
  @Prop({ reflect: true }) pattern: string = '';
  @Prop({ reflect: true }) flags: string = '';

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
    console.log('regexp >> current state at beginning', this.state);

    const regex = new RegExp(this.pattern, this.flags);
    const result = regex.test(value.toString());

    if (this.state === 'failed' && result) this.state = 'init';
    if (!result) this.state = 'failed';

    console.log('regexp >> current state at the end', this.state);
    return Promise.resolve();
  }
}
