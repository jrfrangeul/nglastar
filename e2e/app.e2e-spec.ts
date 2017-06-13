import { LastarPage } from './app.po';

describe('lastar App', () => {
  let page: LastarPage;

  beforeEach(() => {
    page = new LastarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
