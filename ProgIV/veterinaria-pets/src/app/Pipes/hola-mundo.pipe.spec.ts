import { HolaMundoPipe } from './hola-mundo.pipe';

describe('HolaMundoPipe', () => {
  it('create an instance', () => {
    const pipe = new HolaMundoPipe();
    expect(pipe).toBeTruthy();
  });
});
