import { Menu } from './menu';

describe('Menu', () => {
  it('should create an instance with empty string', () => {
    expect(new Menu("")).toBeTruthy();
  });

  it('should create an instance with one char', () => {
    expect(new Menu("a")).toBeTruthy();
  });

  it('should create an instance with standard length string', () => {
    expect(new Menu("abcdefg hijklmnop qrstuvwxyz")).toBeTruthy();
  });
});
