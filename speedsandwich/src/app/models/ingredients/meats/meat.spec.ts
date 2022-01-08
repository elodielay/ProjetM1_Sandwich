import { Meat } from './meat';

class TestMeat extends Meat{
  constructor() {
    super();
  }
}

describe('Meat', () => {
  it('should create an instance', () => {
    expect(new TestViande()).toBeTruthy();
  });
});
