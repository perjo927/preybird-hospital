import { browser, element, by } from 'protractor';

describe('As a consumer of Hospitality Inc. I want to know that I am visiting the right web site', function () {
  const expectedMsg = 'Hospitality Inc.';

  describe('Given that I browse the home route', () => {

    beforeEach(() => {
      browser.get('');
    });

    describe('When I look at the title', () => {

      it('Then it must display: ' + expectedMsg, () => {
        expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
      });
    });
  });
});
