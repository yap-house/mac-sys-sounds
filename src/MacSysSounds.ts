import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

type SoundOptions = {
  name?: string;
  dir?: string;
  ext?: string;
};

interface SoundPlayer {
  soundFilePath(soundOptions: SoundOptions): string;
  play(soundOptions: SoundOptions): Promise<void>;
}

/**
 * This Class controls the playback process of macOS system sounds on the CLI.
 */
export default class MacSysSounds implements SoundPlayer {
  private dirname: string = '/System/Library/Sounds';
  private extname: string = 'aiff';

  /**
   * Return the path string to the sound file with the name specified.
   *
   * @param {string} name - Sound name to play
   * @param {string} [dir] - Optional. Specify the path to the folder when referencing a folder other than the standard folder.
   * @param {string} [ext] - Optional. Specify this if you want to use a file format other than the system standard sound file (.aiff).
   * @returns Path string to the specified sound file.
   */
  public soundFilePath({
    name,
    dir = this.dirname,
    ext = this.extname,
  }: SoundOptions = {}): string {
    return path.format({ dir, name, ext });
  }

  /**
   * Play sound
   *
   * @param {string} name - Sound name to play
   * @param {string} [dir] - Optional. Specify the path to the folder when referencing a folder other than the standard folder.
   * @param {string} [ext] - Optional. Specify this if you want to use a file format other than the system standard sound file (.aiff).
   * @returns {Promise<void>} Promise object.
   */
  public play({
    name,
    dir = this.dirname,
    ext = this.extname,
  }: SoundOptions = {}): Promise<void> {
    return new Promise((resolve) => {
      const soundFilePath = this.soundFilePath({ dir, name, ext });

      if (!fs.existsSync(soundFilePath)) {
        throw new Error(`sound file is not found. file: ${soundFilePath}`);
      }

      execSync(`afplay ${soundFilePath}`);
      resolve();
    });
  }

  /**
   * Play /System/Library/Sounds/Basso.aiff
   * @returns {Promise<void>} Promise object.
   */
  public async basso(): Promise<void> {
    return await this.play({ name: 'Basso' });
  }

  /**
   * Play /System/Library/Sounds/Blow.aiff
   * @returns {Promise<void>} Promise object.
   */
  public async blow(): Promise<void> {
    return await this.play({ name: 'Blow' });
  }

  /**
   * Play /System/Library/Sounds/Bottle.aiff
   * @returns {Promise<void>} Promise object.
   */
  public async bottle(): Promise<void> {
    return await this.play({ name: 'Bottle' });
  }

  /**
   * Play /System/Library/Sounds/Frog.aiff
   * @returns {Promise<void>} Promise object.
   */
  public async frog(): Promise<void> {
    return await this.play({ name: 'Frog' });
  }

  /**
   * Play /System/Library/Sounds/Funk.aiff
   * @returns {Promise<void>} Promise object.
   */
  public async funk(): Promise<void> {
    return await this.play({ name: 'Funk' });
  }

  /**
   * Play /System/Library/Sounds/Glass.aiff
   * @returns {Promise<void>} Promise object.
   */
  public async glass(): Promise<void> {
    return await this.play({ name: 'Glass' });
  }

  /**
   * Play /System/Library/Sounds/Hero.aiff
   * @returns {Promise<void>} Promise object.
   */
  public async hero(): Promise<void> {
    return await this.play({ name: 'Hero' });
  }

  /**
   * Play /System/Library/Sounds/Morse.aiff
   * @returns {Promise<void>} Promise object.
   */
  public async morse(): Promise<void> {
    return await this.play({ name: 'Morse' });
  }

  /**
   * Play /System/Library/Sounds/Ping.aiff
   * @returns {Promise<void>} Promise object.
   */
  public async ping(): Promise<void> {
    return await this.play({ name: 'Ping' });
  }

  /**
   * Play /System/Library/Sounds/Pop.aiff
   * @returns {Promise<void>} Promise object.
   */
  public async pop(): Promise<void> {
    return await this.play({ name: 'Pop' });
  }

  /**
   * Play /System/Library/Sounds/Purr.aiff
   * @returns {Promise<void>} Promise object.
   */
  public async purr(): Promise<void> {
    return await this.play({ name: 'Purr' });
  }

  /**
   * Play /System/Library/Sounds/Sosumi.aiff
   * @returns {Promise<void>} Promise object.
   */
  public async sosumi(): Promise<void> {
    return await this.play({ name: 'Sosumi' });
  }

  /**
   * Play /System/Library/Sounds/Submarine.aiff
   * @returns {Promise<void>} Promise object.
   */
  public async submarine(): Promise<void> {
    return await this.play({ name: 'Submarine' });
  }

  /**
   * Play /System/Library/Sounds/Tink.aiff
   * @returns {Promise<void>} Promise object.
   */
  public async tink(): Promise<void> {
    return await this.play({ name: 'Tink' });
  }
}
