import { QuartoModule } from './quarto.module';

describe('QuartoModule', () => {
  let quartoModule: QuartoModule;

  beforeEach(() => {
    quartoModule = new QuartoModule();
  });

  it('should create an instance', () => {
    expect(quartoModule).toBeTruthy();
  });
});
