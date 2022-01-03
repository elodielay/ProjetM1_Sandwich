import { EscalopeDinde } from './escalope-dinde';

describe('EscalopeDinde', () => {
  it('should create an instance', () => {
    expect(new EscalopeDinde()).toBeTruthy();
  });

  it('should cost 0.5', () => {
    expect(new EscalopeDinde().price).toEqual(0.5);
  });

  it('should be named Escalope', () => {
    expect(new EscalopeDinde().wording).toEqual("Escalope");
  });
});
