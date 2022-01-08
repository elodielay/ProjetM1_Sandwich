import { Drink } from './drink';

class TestDrink extends Drink{
  constructor() {
    super();
  }
}

describe('Drink', () => {
  it('should create an instance', () => {
    expect(new TestBoisson()).toBeTruthy();
  });
});
