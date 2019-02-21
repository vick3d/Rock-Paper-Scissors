require('../spec.helper');

describe('User can play a game of Rock Paper Scissors vs Computer', () => {
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });
 
  beforeEach(async () => {
    await browser.page.reload();
  });

  after(() => {
    browser.close();
  });

  it('can click on "Rock" and get result', async () => {
    await browser.clickOnButton("button[class='rock']")
    let content = await page.getContent("[class='result']")
    expect(content).to.be.oneOf(['Win','Loss','Draw']);
  })

  it('can click on "Paper" and get result', async () => {
    await browser.clickOnButton("button[class='paper']")
    let content = await page.getContent("[class='result']")
    expect(content).to.be.oneOf(['Win','Loss','Draw']);
  })

  it('can click on "Scissors" and get result', async () => {
    await browser.clickOnButton("button[class='scissors']")
    let content = await page.getContent("[class='result']")
    expect(content).to.be.oneOf(['Win','Loss','Draw']);
  })
});