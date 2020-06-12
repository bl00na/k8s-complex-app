// Here we map the Kubernetes container environment variables defined in the Pod/Deployment
// definition file to JavaScript variables to use them in our code, f.e.: keys.redisHost
module.exports = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  pgUser: process.env.POSTGRES_USER,
  pgHost: process.env.POSTGRES_HOST,
  pgPort: process.env.POSTGRES_PORT,
  pgDatabase: process.env.POSTGRES_DATABASE,
  pgPassword: process.env.POSTGRES_PASSWORD
};
