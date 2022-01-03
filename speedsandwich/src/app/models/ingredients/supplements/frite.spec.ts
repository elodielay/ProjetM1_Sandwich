import { Frite } from './frite';

describe('Frite', () => {
  it('should create an instance', () => {
    expect(new Frite()).toBeTruthy();
  });

  it('should cost 0.5', () => {
    expect(new Frite().price).toEqual(0.5);
  });

  it('should be named Frites', () => {
    expect(new Frite().wording).toEqual("Frites");
  });
});
