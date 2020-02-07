import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'duo-radio',
  styleUrl: 'radio.css',
  shadow: true
})
export class Radio {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
