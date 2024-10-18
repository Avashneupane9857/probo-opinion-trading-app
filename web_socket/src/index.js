import express from "express";
import { WebSocket, WebSocketServer } from "ws";

const app = express();

const httpServer = app.listen(8080);

const wss = new WebSocketServer({ server: httpServer });

wss.on("connection", (ws) => {
  ws.on("open", () => {
    console.log("web socket connection opened");
  });

  ws.on("message", (data, isBinary) => {
    if (ws.readyState == WebSocket.OPEN) {
      wss.clients.forEach((client) => {
        client.send(data, { binary: isBinary });
      });
    }
  });

  wss.on("close", () => {
    console.log("socket disconnected");
  });
});
