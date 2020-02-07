import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'duo-checkbox',
  styleUrl: 'checkbox.css',
  shadow: true
})
export class Checkbox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
