module.exports = {
  apps: [
    {
      name: 'DAO-Launchpad-Interface',
      script: 'npm',
      args: 'start',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      max_memory_restart: '500M',
    },
  ],
}
