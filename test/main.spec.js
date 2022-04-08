import { onNavigate } from '../src/main.js';

describe('onNavigate', () => {
  it('Cambia a Feed', () => {
    onNavigate('/feed');
    expect(window.location.pathname).toEqual('/feed');
  });
});
