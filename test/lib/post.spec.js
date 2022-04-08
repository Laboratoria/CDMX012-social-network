import { renderPost } from '../../src/components/post';

jest.mock('../../src/lib/firebaseFunctions.js');
describe('post test', () => {
  it('Al renderizarse, post debe contener', () => {
    expect(renderPost().innerHTML).toContain('p');
  });
});
