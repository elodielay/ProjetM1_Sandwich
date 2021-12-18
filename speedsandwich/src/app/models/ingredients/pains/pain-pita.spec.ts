import { PainPita } from './pain-pita';

describe('PainPita', () => {
  it('should create an instance', () => {
    expect(new PainPita()).toBeTruthy();
  });

  it('should cost 0.5', () => {
    expect(new PainPita().prix).toEqual(0.5);
  });

  it('should be named Pain Pita', () => {
    expect(new PainPita().libelle).toEqual("Pain Pita");
  });
});
