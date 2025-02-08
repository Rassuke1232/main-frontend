module.exports = {
  apps : [{
    name: "main-frontend",
    script: 'npm',
    args: 'start',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
  }],

  deploy : {
    production : {
      user : 'deployer',
      host : '207.154.253.206',
      ref  : 'origin/master',
      repo : 'git@207.154.253.206:/var/git/bes/main-frontend.git',
      path : '/var/www/main-frontend/',
      'pre-deploy-local': '',
      'post-deploy': 'docker compose -p main-frontend build && docker compose -p main-frontend stop && docker compose -p main-frontend up -d',
      'pre-setup': ''
    }
  }
};
