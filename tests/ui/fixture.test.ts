import { AutomationTestStore } from '../AutomationTestStore';
import {test} from '../fixture';

test('Check if the title is ok',async ({automationTestStore})=> {
    await automationTestStore.toHaveTitle();
})

test('Check if the Url is ok',async ({automationTestStore})=> {
    await automationTestStore.loginRegister();
    await automationTestStore.toHaveUrl();
})