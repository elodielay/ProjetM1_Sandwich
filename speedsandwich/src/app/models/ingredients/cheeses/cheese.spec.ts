import { Cheese } from './cheese';

class TestCheese extends Cheese{
  constructor() {
    super();
  }
}

describe('Cheese', () => {
  it('should create an instance', () => {
    expect(new TestFromage()).toBeTruthy();
  });
});
