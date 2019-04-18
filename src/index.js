import { Plugin } from '@jitesoft/yolog';
import { appendFile } from 'fs';
import sprintf from '@jitesoft/sprintf';

export default class File extends Plugin {
  #fileName;
  #format = '[%s](%s): %s\n';
  #path;
  #timeFormat = (ts) => {
    return new Date(ts).toLocaleString()
  };

  /**
   * Change the output format of the time value.
   * Accepts a callback which will be passed a timestamp and expects a returned value to output.
   * The returned value have to be able to be converted to a string.
   *
   * Defaults to (ts) => new Date(ts).toLocaleString()
   *
   * @param {Function} callback Callback function to use instead of default.
   */
  set timeFormat (callback) {
    this.#timeFormat = callback;
  }

  /**
   * Change format of the output.
   * Currently uses the following format:
   * [%s](%s): %s\n
   *
   * Will be passed `tag`, `timestamp`, `message`
   * @param {String} value New format.
   */
  set format (value) {
    this.#format = value;
  }

  /**
   * @param {String} [filePath] Path to log directory.
   * @param {String} [fileName] Name of logfile.
   */
  constructor (filePath = 'logs', fileName = 'debug.log') {
    super();

    this.#path = filePath;
    this.#fileName = fileName;
  }

  /**
   * @private
   * @param {String} filename
   * @param {String} text
   * @return {Promise<void>}
   */
  async #writeToFileAsPromise (filename, text) {
    const path = `${this.#path}/${filename}`;
    return new Promise((resolve, reject) => {
      appendFile(path, text, (error) => {
        if (error) {
          return reject(error);
        }
        resolve();
      });
    })
  }

  /**
   * Method called when a log message is intercepted and the plugin is listening to the given tag.
   *
   * @param {String} tag Tag which was used when logging the message.
   * @param {Number} timestamp Timestamp (in ms) when the log was intercepted by the Yolog instance.
   * @param {String} message
   * @return {Promise<void>}
   */
  async log (tag, timestamp, message) {
    return await this.#writeToFileAsPromise(
      this.#fileName,
      sprintf(this.#format, tag, (this.#timeFormat(timestamp)).toLocaleString(), message)
    );
  }
}

export {
  File as FilePlugin,
};
