import { Boisson } from './boisson';

class TestBoisson extends Boisson{
  constructor() {
    super();
  }
}

describe('Boisson', () => {
  it('should create an instance', () => {
    expect(new TestBoisson()).toBeTruthy();
  });
});
