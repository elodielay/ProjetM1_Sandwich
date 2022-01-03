import { SodaOrange } from './soda-orange';

describe('SodaOrange', () => {
  it('should create an instance', () => {
    expect(new SodaOrange()).toBeTruthy();
  });

  it('should cost 0.5', () => {
    expect(new SodaOrange().price).toEqual(0.5);
  });

  it('should be named Soda à l\'orange', () => {
    expect(new SodaOrange().wording).toEqual("Soda à l'orange");
  });
});
