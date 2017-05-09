import { Angularsummit2017Page } from './app.po';

describe('angularsummit2017 App', function() {
  let page: Angularsummit2017Page;

  beforeEach(() => {
    page = new Angularsummit2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
