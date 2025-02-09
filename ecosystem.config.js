module.exports = {
  apps : [{
    name: "main-frontend",
    script: 'npm run dev',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
  }],

  deploy : {
    production : {
      user : 'deployer',
      host : '68.183.219.8',
      ref  : 'origin/master',
      repo : 'git@207.154.253.206:/var/git/main-frontend.git',
      path : '/var/www/main-frontend/',
      'pre-deploy-local': '',
      'post-deploy': 'docker compose -p main-frontend build && docker compose -p main-frontend stop && docker compose -p main-frontend up -d',
      'pre-setup': ''
    }
  }
};
