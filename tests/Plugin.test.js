import Plugin from '../src/index';
import fs from 'fs';
jest.mock('fs');

describe('Test File plugin.', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  test('Write to file', async () => {
    fs.appendFile = jest.fn((a, b, c) => c());
    fs.mkdirSync = jest.fn(() => true);
    const timestamp = new Date().getTime();
    const plugin = new Plugin();
    await plugin.log('abc', timestamp, 'Message message');
    expect(fs.appendFile).toHaveBeenCalledWith(
      'logs/debug.log', `[abc](${new Date(timestamp).toLocaleString()}): Message message\n`, expect.any(Function)
    );
  });

  test('Write to file with changed time format', async () => {
    fs.appendFile = jest.fn((a, b, c) => c());
    fs.mkdirSync = jest.fn(() => true);
    const plugin = new Plugin();
    plugin.timeFormat = (_t) => 'howdy!';
    await plugin.log('abc', 123123123, 'Message message');
    expect(fs.appendFile).toHaveBeenCalledWith(
      'logs/debug.log', '[abc](howdy!): Message message\n', expect.any(Function)
    );
  });

  test('Write to file with changed format', async () => {
    fs.appendFile = jest.fn((a, b, c) => c());
    fs.mkdirSync = jest.fn(() => true);
    const timestamp = new Date().getTime();
    const plugin = new Plugin();
    plugin.format = 'Changed [%s] FORMAT [%s] TO [%s] THIS!';
    await plugin.log('abc', timestamp, 'Message message');
    expect(fs.appendFile).toHaveBeenCalledWith(
      'logs/debug.log', `Changed [abc] FORMAT [${new Date(timestamp).toLocaleString()}] TO [Message message] THIS!`, expect.any(Function)
    );
  });
});
