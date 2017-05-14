import { ScribeNotesAppPage } from './app.po';

describe('scribe-notes-app App', () => {
  let page: ScribeNotesAppPage;

  beforeEach(() => {
    page = new ScribeNotesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
