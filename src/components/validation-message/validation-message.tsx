import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'duo-validation-message',
  styleUrl: 'validation-message.css',
  shadow: true
})
export class ValidationMessage {
  @Prop({ reflect: true }) type: 'error' | 'success' | 'info' = 'error';

  render() {
    return (
      <Host
        class={{
          'error': this.type === 'error',
          'success': this.type === 'success',
          'info': this.type === 'info'
        }}
      >
        <duo-icon icon={this.type}></duo-icon>
        <duo-caption><slot /></duo-caption>
      </Host>
    );
  }
}
