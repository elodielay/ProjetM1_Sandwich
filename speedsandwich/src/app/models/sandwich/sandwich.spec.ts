import { Sandwich } from './sandwich';

describe('Sandwich', () => {
  it('should create an instance', () => {
    expect(new Sandwich("","")).toBeTruthy();
  });
});
