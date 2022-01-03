import { Emmental } from './emmental';

describe('Emmental', () => {
  it('should create an instance', () => {
    expect(new Emmental()).toBeTruthy();
  });

  it('should cost 0.5', () => {
    expect(new Emmental().price).toEqual(0.5);
  });

  it('should be named Emmental', () => {
    expect(new Emmental().wording).toEqual("Emmental");
  });
});
