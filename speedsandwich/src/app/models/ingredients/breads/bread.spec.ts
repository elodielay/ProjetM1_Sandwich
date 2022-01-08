import { Bread } from './bread';

class TestBread extends Bread{
  constructor() {
    super();
  }
}

describe('Bread', () => {
  it('should create an instance', () => {
    expect(new TestPain()).toBeTruthy();
  });
});
