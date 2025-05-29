import { verifyToken }     from "../middleware/jwt.js";
import { saveChatMessage } from "../repositories/chat.repository.js";

export function registerChatHandlers(io) {
    io.use((socket, next) => {
    try {
        const token = socket.handshake.auth.token;            // 클라이언트에서 auth.token으로 JWT 전송
        const { userId } = verifyToken(token);                // payload.userId 꺼내기
        socket.userId = userId;
        next();
        } catch (err) {
        next(new Error("Authentication error"));
    }
    });

    io.on("connection", socket => {
    console.log("New client connected:", socket.id, "userId:", socket.userId);

    socket.on("joinRoom", ({ roomId }) => {
        socket.join(String(roomId));
    });

    socket.on("sendMessage", async ({ roomId, side, message }) => {
        try {
        const chatRecord = await saveChatMessage({
            roomId,
            userId: socket.userId,
            side,
            message
        });
        io.to(String(roomId)).emit("newMessage", chatRecord);
        } catch (err) {
        console.error("Failed to save chat:", err);
        }
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
    });
}