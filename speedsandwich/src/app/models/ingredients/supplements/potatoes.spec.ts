import { Potatoes } from './potatoes';

describe('Potatoes', () => {
  it('should create an instance', () => {
    expect(new Potatoes()).toBeTruthy();
  });

  it('should cost 0.5', () => {
    expect(new Potatoes().price).toEqual(0.5);
  });

  it('should be named Potatoes', () => {
    expect(new Potatoes().wording).toEqual("Potatoes");
  });
});
