import { PainBaguette } from './pain-baguette';

describe('PainBaguette', () => {
  it('should create an instance', () => {
    expect(new PainBaguette()).toBeTruthy();
  });

  it('should cost 0.7', () => {
    expect(new PainBaguette().price).toEqual(0.7);
  });

  it('should be named Baguette', () => {
    expect(new PainBaguette().wording).toEqual("Baguette");
  });
});
