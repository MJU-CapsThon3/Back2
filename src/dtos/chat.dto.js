
// 배틀방 생성
export function toCreateRoomDto(body) {
    const { topics } = body;
    if (!Array.isArray(topics) || topics.length !== 2) {
    return { info: false };
    }
    const validSides = ['A', 'B'];
    try {
    return topics.map(t => {
        const side = t.side;
        const title = t.title;
        const suggestedBy = t.suggestedBy || 'user';
        if (!validSides.includes(side) || !title) {
        throw new Error();
        }
        return { side, title: String(title).trim(), suggestedBy };
    });
    } catch {
    return { info: false };
    }
}

// 배틀방 생성 가공
export function responseFromRoom({ room, titleRecords }) {
    return {
    roomId:    room.id,
    adminId:   room.admin,
    topicA:    room.topicA,
    topicB:    room.topicB,
    status:    room.status,
    createdAt: room.createdAt,
    topics:    titleRecords.map(r => ({
        topicId:    r.id,
        side:       r.side,
        title:      r.title,
        suggestedBy:r.suggested_by,
        createdAt:  r.created_at
    }))
    };
}

// 방 참가 dto
export function toJoinRoomDto(body) {
    const { side } = body;
    const valid = ['A', 'B', 'P']; // P = 참가자
    if (!valid.includes(side)) {
    return { info: false };
    }
    return { side };
}