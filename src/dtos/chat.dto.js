
// 배틀방 생성
export function toCreateRoomDto(body) {
    const { roomName } = body;
    if (!roomName || typeof roomName !== "string" || roomName.trim() === "") {
    return { info: false };
    }
    return { roomName: roomName.trim() };
}



// 방 참가 dto
export function toJoinRoomDto(body) {
    const { side } = body;
    const valid = ["A", "B", "P"]; // P = 관전자
    if (!valid.includes(side)) {
    return { info: false };
    }
    return { side };
}