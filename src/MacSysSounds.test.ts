import MacSysSounds from './MacSysSounds';
const player = new MacSysSounds();

describe('File path string generation test', () => {
  test('The file path for "Sound name: Tink" is "/System/Library/Sounds/Tink.aiff"', () => {
    const filepath = player.soundFilePath({ name: 'Tink' });
    expect(filepath).toBe('/System/Library/Sounds/Tink.aiff');
  });

  test('If the folder name is "/huga", the sound name is "Hoge", and the extension is "mp3", the file path is "/huga/Hoge.mp3".', () => {
    const filepath = player.soundFilePath({
      name: 'Hoge',
      dir: '/huga',
      ext: 'mp3',
    });
    expect(filepath).toBe('/huga/Hoge.mp3');
  });
});

describe('System sound playback test', () => {
  test('1. The system sound "Basso" can be played normally.', async () => {
    await expect(player.basso()).resolves.not.toThrow();
  });

  test('2. The system sound "Blow" can be played normally.', async () => {
    await expect(player.blow()).resolves.not.toThrow();
  });

  test('3. The system sound "Bottle" can be played normally.', async () => {
    await expect(player.bottle()).resolves.not.toThrow();
  });

  test('4. The system sound "Frog" can be played normally.', async () => {
    await expect(player.frog()).resolves.not.toThrow();
  });

  test('5. The system sound "Funk" can be played normally.', async () => {
    await expect(player.funk()).resolves.not.toThrow();
  });

  test('6. The system sound "Glass" can be played normally.', async () => {
    await expect(player.glass()).resolves.not.toThrow();
  });

  test('7. The system sound "Hero" can be played normally.', async () => {
    await expect(player.hero()).resolves.not.toThrow();
  });

  test('8. The system sound "Morse" can be played normally.', async () => {
    await expect(player.morse()).resolves.not.toThrow();
  });

  test('9. The system sound "Ping" can be played normally.', async () => {
    await expect(player.ping()).resolves.not.toThrow();
  });

  test('10. The system sound "Pop" can be played normally.', async () => {
    await expect(player.pop()).resolves.not.toThrow();
  });

  test('11. The system sound "Purr" can be played normally.', async () => {
    await expect(player.purr()).resolves.not.toThrow();
  });

  test('12. The system sound "Sosumi" can be played normally.', async () => {
    await expect(player.sosumi()).resolves.not.toThrow();
  });

  test('13. The system sound "Submarine" can be played normally.', async () => {
    await expect(player.submarine()).resolves.not.toThrow();
  });

  test('14. The system sound "Tink" can be played normally.', async () => {
    await expect(player.tink()).resolves.not.toThrow();
  });

  test('Throws error when playing non-existent file.', async () => {
    await expect(player.play({ name: '--not-exits-file' })).rejects.toThrow();
  });

  test('Can catch errors in play method.', () => {
    player.play({ name: '--not-exits-file' }).catch((e) => {
      expect(e.message).toBe(
        'sound file is not found. file: /System/Library/Sounds/--not-exits-file.aiff'
      );
    });
  });
});
