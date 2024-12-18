# mac-sys-sounds

Play macOS system sounds on the CLI.
Use this when you want to generate a warning sound with your own CLI application.

## Installation

``` shell
npm install mac-sys-sounds
```

## Usage

``` javascript
import MacSysSounds from 'mac-sys-sounds';

const player = new MacSysSounds();
await player.tink(); // Play the "Tink" system sound.

// If you want to catch the error
await player.tink().catch((e) => {
  if (e) console.log(e.message);
});

// If you want to playback other sound
await player.play({
  name: 'hoge',    // Sound file name (without extension).
  dir: 'dir/name', // The directory where the sound file is located.
  ext: 'mp3'       // The file extension of the sound file.
});
```

## Playback sound method List

Play the "Bottle" system sound.

```
await player.basso();
```

Play the "Blow" system sound.

```
await player.blow();
```

Play the "Bottle" system sound.

```
await player.bottle();
```

Play the "Frog" system sound.

```
await player.frog();
```

Play the "Funk" system sound.

```
await player.funk();
```

Play the "Glass" system sound.

```
await player.glass();
```

Play the "Hero" system sound.

```
await player.hero();
```

Play the "Morse" system sound.

```
await player.morse();
```

Play the "Ping" system sound.

```
await player.ping();
```

Play the "Pop" system sound.

```
await player.pop();
```

Play the "Purr" system sound.

```
await player.purr();
```

Play the "Sosumi" system sound.

```
await player.sosumi();
```

Play the "Submarine" system sound.

```
await player.submarine();
```

Play the "Tink" system sound.

```
await player.tink();
```

## LICENSE

MIT
