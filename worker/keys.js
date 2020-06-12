// Here we map the Kubernetes container environment variables defined in the Pod/Deployment
// definition file to JavaScript variables to use them in our code, f.e.: keys.redisHost
module.exports = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT
};
