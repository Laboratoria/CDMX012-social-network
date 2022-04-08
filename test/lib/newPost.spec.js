import { newPost } from '../../src/components/newPost.js';

jest.mock('../../src/lib/firebaseFunctions.js');
describe('newPost test', () => {
  it('Al renderizarse, newPost debe contener', () => {
    expect(newPost().innerHTML).toContain('¿Que estas pensando?...');
  });
});
