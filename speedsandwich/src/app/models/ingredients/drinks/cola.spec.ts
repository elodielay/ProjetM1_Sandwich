import { Cola } from './cola';

describe('Cola', () => {
  it('should create an instance', () => {
    expect(new Cola()).toBeTruthy();
  });

  it('should cost 0.5', () => {
    expect(new Cola().prix).toEqual(0.5);
  });

  it('should be named Cola', () => {
    expect(new Cola().libelle).toEqual("Cola");
  });
});
