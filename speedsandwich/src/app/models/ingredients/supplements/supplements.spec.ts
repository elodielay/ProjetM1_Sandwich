import { Supplements } from './supplements';

class TestSupplements extends Supplements{
  constructor() {
    super();
  }
}

describe('Supplements', () => {
  it('should create an instance', () => {
    expect(new TestSupplements()).toBeTruthy();
  });
});
