import { test, expect } from '@playwright/test';

let url = 'https://howlingtesters.pl/party/';
 let statistics = {
  strength: 20,
  agility: 15,
  intelligence: 10,
  charisma: 5
};

const names = [ 'Agas', 'Borin', 'Calia', 'Doran', 'Elara' ];

test('test', async ({ page }) => {
  await page.goto(url);
  url = 'https://howlingtesters.pl/party/';

statistics = {
  strength: 10,
  agility: 20,
  intelligence: 10,
  charisma: 5
}; 

//names = ['Farin' ];

names.push('Farin');

console.log(statistics);
console.log(names);


  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByRole('textbox', { name: 'Imię postaci:' }).fill('Agas');
  await page.getByRole('img', { name: 'Zwiadowca' }).click();
  await page.getByRole('spinbutton', { name: 'Siła:' }).fill('5');
  await page.getByRole('button', { name: 'Dodaj postać' }).click();
  await expect(page.locator('#popup-title')).toContainText('Niepełne punkty');
  await expect(page.locator('#popup-message')).toContainText('Nie można utworzyć postaci. Pozostało 20 punktów do rozdania!');
  await page.getByRole('button', { name: 'Zamknij' }).click();
  await page.getByRole('spinbutton', { name: 'Siła:' }).fill('20');
  await page.getByRole('spinbutton', { name: 'Spryt:' }).fill('15');
  await page.getByRole('button', { name: 'Dodaj postać' }).click();
  await page.close();
});


