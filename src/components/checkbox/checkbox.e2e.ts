import { newE2EPage } from '@stencil/core/testing';

describe('duo-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<duo-checkbox></duo-checkbox>');

    const element = await page.find('duo-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
