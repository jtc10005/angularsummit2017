/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { GenderPipe } from './gender.pipe';

describe('GenderPipe', () => {
  it('create an instance', () => {
    const pipe = new GenderPipe();
    expect(pipe).toBeTruthy();
  });

  it('f should return Female', () => {
    const pipe = new GenderPipe();
    expect(pipe.transform('f')).toEqual('Female');
  });

  it('m should return male', () => {
    const pipe = new GenderPipe();
    expect(pipe.transform('m')).toEqual('Male');
  });

  it('"" should return unknown', () => {
    const pipe = new GenderPipe();
    expect(pipe.transform('')).toEqual('Unknown');
  });
});
