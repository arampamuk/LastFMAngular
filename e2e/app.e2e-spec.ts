import { LastFMAngularPage } from './app.po';

describe('last-fmangular App', () => {
  let page: LastFMAngularPage;

  beforeEach(() => {
    page = new LastFMAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
