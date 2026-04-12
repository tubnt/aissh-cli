#!/usr/bin/env node
const { execFileSync } = require('child_process');
const path = require('path');
const os = require('os');

const platform = os.platform();
const arch = os.arch();

const MAP = {
  'linux-x64': 'aissh-linux-x64',
  'linux-arm64': 'aissh-linux-arm64',
  'darwin-x64': 'aissh-darwin-x64',
  'darwin-arm64': 'aissh-darwin-arm64',
  'win32-x64': 'aissh-win32-x64.exe'
};

const key = `${platform}-${arch}`;
const bin = MAP[key];
if (!bin) {
  console.error(`Unsupported platform: ${key}`);
  process.exit(1);
}

const binPath = path.join(__dirname, bin);
try {
  execFileSync(binPath, process.argv.slice(2), { stdio: 'inherit' });
} catch (e) {
  process.exit(e.status || 1);
}
