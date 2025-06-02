// src/socket/chat.socket.js
import { Server as SocketIOServer } from "socket.io";
import { createChat } from "../services/chat.service.js";
import { verifyToken } from "../middleware/jwt.js";

export function registerChatHandlers(io) {
  // 1) 연결 시마다 토큰 검증: socket.handshake.auth.token
  io.use((socket, next) => {
    try {
      const raw = socket.handshake.auth.token;
      const { userId } = verifyToken(raw);
      socket.userId = userId; 
      next();
    } catch (err) {
      next(new Error("Authentication error"));
    }
  });

  // 2) 연결 성공
  io.on("connection", (socket) => {
    console.log("🔌 Socket.IO 연결됨:", socket.id, "userId:", socket.userId);

    // 2.1) 방 참여
    socket.on("joinRoom", ({ roomId }) => {
      socket.join(String(roomId));
      console.log(`→ 소켓 ${socket.id} 에서 방 ${roomId} 참여`);
    });

    // 2.2) 메시지 수신 및 저장 → 브로드캐스트
    socket.on("sendMessage", async ({ roomId, side, message }) => {
      try {
        // AI 욕설 필터링 + DB 저장
        const chatRecord = await createChat({
          roomId:  Number(roomId),
          userId:  socket.userId,
          side,
          message,
        });

        // 방(roomId)에 연결된 모든 클라이언트에게 새 메시지 전송
        io.to(String(roomId)).emit("newMessage", {
          id:        chatRecord.id.toString(),
          roomId:    chatRecord.roomId.toString(),
          userId:    chatRecord.userId.toString(),
          side:      chatRecord.side,
          message:   chatRecord.message,
          createdAt: chatRecord.createdAt,
        });
      } catch (err) {
        console.error("🌶 sendMessage 처리 오류:", err);
        // 필요 시 socket.emit("errorMessage", { /* ... */ });
      }
    });

    // 2.3) 연결 해제
    socket.on("disconnect", () => {
      console.log("❌ Socket.IO 연결 종료:", socket.id);
    });
  });
}
