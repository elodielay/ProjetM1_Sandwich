import { SteackHache } from './steack-hache';

describe('SteackHache', () => {
  it('should create an instance', () => {
    expect(new SteackHache()).toBeTruthy();
  });

  it('should cost 0.5', () => {
    expect(new SteackHache().price).toEqual(0.5);
  });

  it('should be named Steak Hache', () => {
    expect(new SteackHache().wording).toEqual("Steak Hache");
  });
});
