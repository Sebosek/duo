import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'duo-caption',
  styleUrl: 'caption.css',
  shadow: true
})
export class Caption {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
