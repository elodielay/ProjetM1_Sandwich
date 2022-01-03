import { PouletFrit } from './poulet-frit';

describe('PouletFrit', () => {
  it('should create an instance', () => {
    expect(new PouletFrit()).toBeTruthy();
  });

  it('should cost 0.7', () => {
    expect(new PouletFrit().price).toEqual(0.7);
  });

  it('should be named Poulet Frit', () => {
    expect(new PouletFrit().wording).toEqual("Poulet Frit");
  });
});
