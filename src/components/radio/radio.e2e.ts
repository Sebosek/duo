import { newE2EPage } from '@stencil/core/testing';

describe('duo-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<duo-radio></duo-radio>');

    const element = await page.find('duo-radio');
    expect(element).toHaveClass('hydrated');
  });
});
