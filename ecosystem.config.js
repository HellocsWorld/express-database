module.exports = {
  apps: [{
    name: 'SERVER',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-217-62-9.us-west-2.compute.amazonaws.com',
      key: '/Users/raulserrano/Desktop/CSC-648/Team-01.pem ',
      ref: 'origin/master',
      repo: 'git@github.com:HellocsWorld/express-database.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
