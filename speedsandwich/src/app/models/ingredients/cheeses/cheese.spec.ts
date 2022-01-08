import { Fromage } from './fromage';

class TestFromage extends Fromage{
  constructor() {
    super();
  }
}

describe('Fromage', () => {
  it('should create an instance', () => {
    expect(new TestFromage()).toBeTruthy();
  });
});
