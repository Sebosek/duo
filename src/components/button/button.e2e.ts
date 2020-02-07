import { newE2EPage } from '@stencil/core/testing';

describe('duo-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<duo-button></duo-button>');

    const element = await page.find('duo-button');
    expect(element).toHaveClass('hydrated');
  });
});
