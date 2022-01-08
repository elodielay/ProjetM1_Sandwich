import { SodaOrange } from './soda-orange';

describe('SodaOrange', () => {
  it('should create an instance', () => {
    expect(new SodaOrange()).toBeTruthy();
  });

  it('should cost 0.5', () => {
    expect(new SodaOrange().prix).toEqual(0.5);
  });

  it('should be named Soda à l\'orange', () => {
    expect(new SodaOrange().libelle).toEqual("Soda à l'orange");
  });
});
