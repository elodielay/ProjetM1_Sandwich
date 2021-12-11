import { Sauce } from './sauce';

class TestSauce extends Sauce{
  constructor() {
    super();
  }
}

describe('Sauce', () => {
  it('should create an instance', () => {
    expect(new TestSauce()).toBeTruthy();
  });
});
