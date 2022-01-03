import { PouletFrit } from './poulet-frit';

describe('PouletFrit', () => {
  it('should create an instance', () => {
    expect(new PouletFrit()).toBeTruthy();
  });

  it('should cost 0.7', () => {
    expect(new PouletFrit().prix).toEqual(0.7);
  });

  it('should be named Poulet Frit', () => {
    expect(new PouletFrit().libelle).toEqual("Poulet Frit");
  });
});
