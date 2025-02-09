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
            host : '159.89.108.231',
            ref  : 'origin/master',
            repo : 'git@github.com:Rassuke1232/main-frontend.git',
            path : '/var/www/main-frontend/',
            'pre-deploy-local': '',
            'post-deploy': 'docker compose -p main-frontend build && docker compose -p main-frontend stop && docker compose -p main-frontend up -d',
            'pre-setup': ''
        }
    }
};