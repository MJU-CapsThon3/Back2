module.exports = {
  apps: [{
    name: 'back2-app',
    script: 'dist/server.js',
    exec_mode: 'cluster',      // 클러스터 모드로 Zero-Downtime
    instances: 'max',          // CPU 코어 수 만큼 인스턴스
    watch: false,
    env: {
      NODE_ENV: 'production'
    }
  }]
};