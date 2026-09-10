import { test, expect } from '@playwright/test';
test.describe("checking for this",  ()=> {

test('Verify Home link is clickable', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  const homeLink = page.getbytext('colored text').textContent()
  console.log("the text is "+homeLink)

  // Verify the link is visible
//await expect(homeLink).toBeVisible();

  // Verify the link is enabled (clickable)
//await expect(homeLink).toBeEnabled();

  // Click the link
//await homeLink.click();
});
});

     