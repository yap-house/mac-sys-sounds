import fs from 'fs';
import MacSysSounds from './dist/MacSysSounds.js';
import { styleText } from 'node:util';

const errorMessage = styleText(
  ['bold', 'red'],
  '\n\nPlease enter a number between 0 and 14!'
);

const player = new MacSysSounds();
let number;

while (number !== 0) {
  console.log('Select the sound to play below.');
  console.log(`
0 (or Ctrl+C). [Quit]
1. Basso
2. Blow
3. Bottle
4. Frog
5. Funk
6. Glass
7. Hero
8. Morse
9. Ping
10. Pop
11. Purr
12. Sosumi
13. Submarine
14. Tink
  `);
  console.log(
    'Enter the number of the sound (After typing, press Enter and Ctrl+D). >'
  );
  const input = fs.readFileSync('/dev/stdin', 'utf8');

  number = parseInt(input.trim());

  switch (number) {
    case 0:
      console.log('Finish processing');
      break;
    case 1:
      await player.basso();
      break;
    case 2:
      await player.blow();
      break;
    case 3:
      await player.bottle();
      break;
    case 4:
      await player.frog();
      break;
    case 5:
      await player.funk();
      break;
    case 6:
      await player.glass();
      break;
    case 7:
      await player.hero();
      break;
    case 8:
      await player.morse();
      break;
    case 9:
      await player.ping();
      break;
    case 10:
      await player.pop();
      break;
    case 11:
      await player.purr();
      break;
    case 12:
      await player.sosumi();
      break;
    case 13:
      await player.submarine();
      break;
    case 14:
      await player.tink();
      break;
    default:
      console.error(errorMessage);
  }
}
