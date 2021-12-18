import { Ketchup } from './ketchup';

describe('Ketchup', () => {
  it('should create an instance', () => {
    expect(new Ketchup()).toBeTruthy();
  });

  it('should cost 0.5', () => {
    expect(new Ketchup().prix).toEqual(0.5);
  });

  it('should be named Ketchup', () => {
    expect(new Ketchup().libelle).toEqual("Ketchup");
  });
});
