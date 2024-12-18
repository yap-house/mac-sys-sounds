# mac-sys-sounds

Play macOS system sounds on the CLI.
Use this when you want to generate a warning sound with your own CLI application.

## Installation

``` shell
npm install mac-sys-sounds
```

## Usage

``` javascript
import MacSysSounds from "mac-sys-sounds";

const player = new MacSysSounds();
await player.tink(); // Play Tink.aiff

// If you want to catch the error
await player.tink().catch((e) => {
  if (e) console.log(e.message);
});
```

## LICENSE

MIT
