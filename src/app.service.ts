import { Injectable } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket } from "socket.io";

@Injectable()
@WebSocketGateway({
  cors: {
    origin: "*"
  }
})
export class AppService {
  @WebSocketServer()
  socket: Socket

  @SubscribeMessage("message")
  getHello(): string {
    this.socket.emit("message", "demo tu website url")
    return 'Hello World!';
  }
}
