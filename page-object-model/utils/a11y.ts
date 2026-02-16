import { AxeBuilder } from '@axe-core/playwright';
import { expect, Page } from '@playwright/test';
 
export const runA11yCheck = async (page: Page) => {
  const accessibilityScanDetailedResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();
 
  expect(accessibilityScanDetailedResults.violations).toEqual([]);
};
 

