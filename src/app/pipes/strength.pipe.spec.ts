import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  let pipe = new StrengthPipe();
  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });

  it('Should display week if bellow 5', () => {
    expect(pipe.transform(5)).toEqual('5 (week)')
  })
  it('Should display strong if bellow between 10 and 20', () => {
    expect(pipe.transform(11)).toEqual('11 (strong)')
  })
  it('Should display strongest if getter or equal  20', () => {
    expect(pipe.transform(20)).toEqual('20 (strongest)')
  })
});
