import cron from 'node-cron';
import { refreshRankings } from './services/user.service.js';

// 매일 00:00 에 실행 (서버 시간 기준)
cron.schedule('0 0 * * *', async () => {
    console.log('▶️ Starting daily ranking refresh...');
    try {
        await refreshRankings();
    } catch (err) {
        console.error('❌ Error during ranking refresh:', err);
    }
});