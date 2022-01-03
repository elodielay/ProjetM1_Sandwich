import { Mayonnaise } from './mayonnaise';

describe('Mayonnaise', () => {
  it('should create an instance', () => {
    expect(new Mayonnaise()).toBeTruthy();
  });

  it('should cost 0.5', () => {
    expect(new Mayonnaise().prix).toEqual(0.5);
  });

  it('should be named Mayonnaise', () => {
    expect(new Mayonnaise().libelle).toEqual("Mayonnaise");
  });
});
