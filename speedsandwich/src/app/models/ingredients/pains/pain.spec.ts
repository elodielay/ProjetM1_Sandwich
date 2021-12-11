import { Pain } from './pain';

class TestPain extends Pain{
  constructor() {
    super();
  }
}

describe('Pain', () => {
  it('should create an instance', () => {
    expect(new TestPain()).toBeTruthy();
  });
});
