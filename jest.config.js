module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: [
    'jest-webgl-canvas-mock'
  ]
};