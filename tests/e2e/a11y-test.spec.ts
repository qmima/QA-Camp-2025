import { test, expect } from '@playwright/test';    
import { runA11yCheck } from '../../page-object-model/utils/a11y';

test.describe('Accessibility tests', () => {
    test('Home Page should have no accessibility violations', async ({ page }) => { 
        await page.goto('https://howlingtesters.pl/party/');
        await page.getByRole('button', { name: 'Accept All' }).click();
        await runA11yCheck(page);
    });
}); 
