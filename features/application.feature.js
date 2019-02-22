require('../spec.helper');

describe('User can play a game of Rock Paper Scissors vs Computer', () => {
  

  before(async () => {
    await global.browser.init()
    await global.browser.visitPage('http://localhost:8080/')
  });
 
  beforeEach(async () => {
    await global.browser.page.reload();
  });

  after(() => {
    global.browser.close();
  });

  it('can click on "Rock" and get result', async () => {
    await global.browser.clickOnButton("input[id='rock']")
    let content = await global.browser.getContent("[id='result']")
    expect(content).to.be.oneOf(['Win','Loss','Draw']);
  })

  it('can click on "Paper" and get result', async () => {
    await global.browser.clickOnButton("input[id='paper']")
    let content = await global.browser.getContent("[id='result']")
    expect(content).to.be.oneOf(['Win','Loss','Draw']);
  })

  it('can click on "Scissors" and get result', async () => {
    await global.browser.clickOnButton("input[id='scissors']")
    let content = await global.browser.getContent("[id='result']")
    expect(content).to.be.oneOf(['Win','Loss','Draw']);
  })
});