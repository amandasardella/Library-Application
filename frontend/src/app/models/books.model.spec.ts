import { Books } from './books.model';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Books()).toBeTruthy();
  });
});