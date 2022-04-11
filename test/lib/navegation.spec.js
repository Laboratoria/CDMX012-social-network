import { navegations, NewPostModal } from '../../src/components/navegation.js';
import { signOutSession } from '../../src/lib/firebase.js';

jest.mock('../../src/lib/firebaseFunctions.js');
describe('navegation test', () => {
  it('Al renderizarse, navegation debe contener', () => {
    expect(navegations(signOutSession).innerHTML).toContain('img');
  });
});
describe('modal test', () => {
  it('Al renderizarse, modal debe contener', () => {
    // no pasa por el append(divModal);
    expect(NewPostModal().innerHTML).toContain('span');
  });
});
