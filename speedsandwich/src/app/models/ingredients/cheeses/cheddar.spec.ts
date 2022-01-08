import { Cheddar } from './cheddar';

describe('Cheddar', () => {
  it('should create an instance', () => {
    expect(new Cheddar()).toBeTruthy();
  });

  it('should cost 0.5', () => {
    expect(new Cheddar().prix).toEqual(0.5);
  });

  it('should be named Cheddar', () => {
    expect(new Cheddar().libelle).toEqual("Cheddar");
  });
});
