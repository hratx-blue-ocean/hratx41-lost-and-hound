module.exports = {
  apps: [
    {
      name: "Lost-And-Hound",
      script: "./server/bin/www"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-18-188-97-145.us-east-2.compute.amazonaws.com",
      key: "~/.ssh/Lost-And-Hound.pem",
      ref: "origin/master",
      repo: "git@github.com:hratx-blue-ocean/hratx41-lost-and-hound.git",
      path: "/home/ubuntu/Lost-And-Hound",
      "post-deploy": "npm run setup && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
