import { createBattleRoom,
    createBattleTitle
} from '../repositories/chat.repository.js';
import { toCreateRoomDto, responseFromRoom } from '../dtos/chat.dto.js';

export const createRoom = async (req, res) => {
  // 1) DTO 변환 및 검증
    const dtoTopics = toCreateRoomDto(req.body);
    if (dtoTopics.info === false) {
    return { info: false };
    }

  // 2) battle_room 생성
    const topicA = dtoTopics.find(t => t.side === 'A').title;
    const topicB = dtoTopics.find(t => t.side === 'B').title;

    const room = await createBattleRoom({
    admin:  req.userId,  // 토큰에서 채워진 userId
    topicA,
    topicB,
    status: 'WAITING'
    });

  // 3) battle_title 이력(A/B) 생성
    const titleRecords = await Promise.all(
    dtoTopics.map(t => createBattleTitle({
      roomId:      room.id,         // 반드시 넘겨줍니다
        side:        t.side,
        title:       t.title,
      suggestedBy: t.suggestedBy     // dto에서 채워준 값
    }))
    );

  // 4) 응답용 DTO 반환
    return responseFromRoom({ room, titleRecords });
};