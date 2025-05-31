import cron from 'node-cron';
import { resetDailyQuestsService } from './services/user.service.js';

// 매일 자정에 실행
cron.schedule('0 0 * * *', async () => {
  try {
    await resetDailyQuestsService();
    console.log('일일 퀘스트가 자정에 성공적으로 초기화되었습니다.');
  } catch (err) {
    console.error('퀘스트 초기화 실패:', err);
  }
});