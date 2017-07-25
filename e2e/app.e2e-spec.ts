import { RmaPage } from './app.po';

describe('rma App', () => {
  let page: RmaPage;

  beforeEach(() => {
    page = new RmaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
