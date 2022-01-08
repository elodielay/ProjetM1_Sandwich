import { Accompaniment } from './accompaniments';

class TestAccompaniments extends Accompaniment{
  constructor() {
    super();
  }
}

describe('Accompaniment', () => {
  it('should create an instance', () => {
    expect(new TestSupplements()).toBeTruthy();
  });
});
