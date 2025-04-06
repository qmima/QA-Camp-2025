import { test as base } from '@playwright/test';
import { AutomationTestStore } from './AutomationTestStore';

export const test = base.extend<{ automationTestStore: AutomationTestStore }>({
    automationTestStore: async ({ page }, use) => {
        const automationTestStore = new AutomationTestStore(page);
        await use(automationTestStore);
    }
});