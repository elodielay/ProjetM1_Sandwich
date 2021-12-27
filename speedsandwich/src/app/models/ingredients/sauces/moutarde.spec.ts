import { Moutarde } from './moutarde';

describe('Moutarde', () => {
  it('should create an instance', () => {
    expect(new Moutarde()).toBeTruthy();
  });

  it('should cost 0.5', () => {
    expect(new Moutarde().prix).toEqual(0.5);
  });

  it('should be named Moutarde', () => {
    expect(new Moutarde().libelle).toEqual("Moutarde");
  });
});
