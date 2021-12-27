import { SteackHache } from './steack-hache';

describe('SteackHache', () => {
  it('should create an instance', () => {
    expect(new SteackHache()).toBeTruthy();
  });

  it('should cost 0.5', () => {
    expect(new SteackHache().prix).toEqual(0.5);
  });

  it('should be named Steak Hache', () => {
    expect(new SteackHache().libelle).toEqual("Steak Hache");
  });
});
