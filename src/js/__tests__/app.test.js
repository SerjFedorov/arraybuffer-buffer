import { ArrayBufferConverter, getBuffer } from '../app';


describe('ArrayBufferConverter', () => {
  let arrayBufferConverter;

  beforeEach(() => {
    arrayBufferConverter = new ArrayBufferConverter();
  });

  it('должен загружать ArrayBuffer и преобразовывать его в строку', () => {
    const buffer = getBuffer();
    arrayBufferConverter.load(buffer);
    const result = arrayBufferConverter.toString();
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });

  it('должен возвращать пустую строку, если ArrayBuffer не загружен', () => {
    const result = arrayBufferConverter.toString();
    expect(result).toBe('');
  });
});
