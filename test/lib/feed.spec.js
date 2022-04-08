import { feed } from '../../src/components/feed.js';

jest.mock('../../src/lib/firebaseFunctions.js');
describe('feed test', () => {
  it('Al renderizarse, feed debe contener', () => {
    expect(feed().innerHTML).toContain('Buscar...');
  });
});
