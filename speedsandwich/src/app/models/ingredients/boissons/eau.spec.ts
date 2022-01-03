import { Eau } from './eau';

describe('Eau', () => {
  it('should create an instance', () => {
    expect(new Eau()).toBeTruthy();
  });

  it('should cost 0.5', () => {
    expect(new Eau().price).toEqual(0.5);
  });

  it('should be named Eau', () => {
    expect(new Eau().wording).toEqual("Eau");
  });
});
