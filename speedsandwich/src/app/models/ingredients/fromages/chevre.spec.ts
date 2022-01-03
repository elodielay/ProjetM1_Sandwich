import { Chevre } from './chevre';

describe('Chevre', () => {
  it('should create an instance', () => {
    expect(new Chevre()).toBeTruthy();
  });

  it('should cost 0.5', () => {
    expect(new Chevre().price).toEqual(0.5);
  });

  it('should be named Chevre', () => {
    expect(new Chevre().wording).toEqual("Chevre");
  });
});
