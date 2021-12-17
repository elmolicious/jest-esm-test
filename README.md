# jest-esm-test

- `npm run start` -> works without problems
- `npm run test` -> Test a.test.js works fine, Test b.test.js does not work

WS export of CommonJS and export of Module is different. That is a little bit strange otherwise it should not make a big difference if CommonJS or Module is loaded.

Just loading the explicit path of the CommonJS module works. But this is a quite ugly solution.
