# jest-esm-test

- `npm run start` -> works without problems
- `npm run test` -> Test a.test.js works fine, Test b.test.js does not work

One option is to do it like depicted. Use .mjs files to declare that you are using ESM. Adapt the jest config.

Another way would be to just import commonjs modules in your js files like the following. That should also work.
Depends a little bit on whatever these modules export.


import Websocket from 'ws';
import { createServer } from 'https'

export const getCurrentState = () => {
  const server = createServer({})
  const wss = new Websocket.WebSocketServer({ server })

  return 5
}
