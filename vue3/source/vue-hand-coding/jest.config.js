module.exports = {
    transform: {
      // '^.+\\.vue$': 'vue-jest', //vuejest 处理.vue
      '^.+\\.js$': 'babel-jest',  // babel jest处理js or jsx
    },
    testMatch: ['**/?(*.)+(spec).[jt]s?(x)'],
    "collectCoverage": true,
    "coverageReporters": ["json", "html"]
}