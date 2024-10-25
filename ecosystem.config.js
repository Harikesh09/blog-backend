module.exports = {
  apps: [
    {
      name: "blog-backend",
      script: "npm",
      args: "start",
      wait_ready: true,
      listen_timeout: 3000,
    },
  ],
};
