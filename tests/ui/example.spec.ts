import { test, expect } from '@playwright/test';

let url = 'https://automationteststore.com/';

test('sprawdzenie czy strona ma dobry tytuł', async ({ page }) => {
  await page.goto(url);
  
  await expect(page).toHaveTitle(/A place to practice your automation skills!/);
});


test('sprawdź tekst', async ({ page }) => {
  await page.goto(url);
 const locator1 = page.locator('//*[@id="maincontainer"]/div/div/div[1]/section/div/h4');
  await expect(locator1).toContainText('Welcome to the Automation Test Store! ');
});


test ('sprawdzanie czy strona ma bledny tytuł', async ({ page }) => {
  await page.goto(url);
  await expect(page).not.toHaveTitle(/A place to practice your automation skills!!!!!!!!!!!!!/)
});


test('sprawdzanie czy strona ma dobry URL', async ({ page }) => {
  await page.goto(url);
  await page.getByText('Login or register').click();
  await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=account/login');
});


test('sprawdzanie czy element jest widoczny', async ({ page }) => {
  await page.goto(url);
  const element = page.getByText('Login or register');
  await expect(element).toBeVisible();
});


// soft expect
// własny komunikat
test('sprawdzenie czy strona ma dobry tytuł z SOFT', async ({ page, context, browser, browserName}) => {
  await page.goto(url);
  let newPage = context.newPage();

  await expect.soft(page, 'sprawdzenie z SOFT').toHaveTitle(/A place to practice your automation skills! SOFT/);
  await page.getByText('Login or register').click();
  await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=account/login');
});
