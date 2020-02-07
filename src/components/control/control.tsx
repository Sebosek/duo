import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'duo-control',
  styleUrl: 'control.css',
  shadow: true
})
export class Control {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
