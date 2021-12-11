import { Viande } from './viande';

class TestViande extends Viande{
  constructor() {
    super();
  }
}

describe('Viande', () => {
  it('should create an instance', () => {
    expect(new TestViande()).toBeTruthy();
  });
});
