import { WebSocketServer } from 'ws'
import { createServer } from 'https'

export const getCurrentState = () => {
  const server = createServer({})
  const wss = new WebSocketServer({ server })

  return 5
}