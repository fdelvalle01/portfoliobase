// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// JSDOM no implementa HTMLCanvasElement.getContext; ParticlesCanvas lo usa
// en un efecto y sin este mock jest imprime un error por cada render.
Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
  configurable: true,
  value: jest.fn(() => null),
});
