import * as ws from '../node_modules/ws/index.js'
import { createServer } from 'https'

export const getCurrentState = () => {
  const server = createServer({})
  const wss = new ws.default.WebSocketServer({ server })

  return 5
}
