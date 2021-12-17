import WebSocket from 'ws'
import { createServer } from 'https'

export const getCurrentState = () => {
  const server = createServer({})
  const wss = new WebSocket.WebSocketServer({ server })

  return 5
}
