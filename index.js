/**
 * Autor: Impulse
 * License: MIT
 **/

const { promisify } = require('util');
const redis = require("redis");

const intervalTimer = 600 * 1000 // 10 minutes
const expirationTime = 1800; // in seconds -> 1800 = 30 minutes
// if a key expires, the next 5 min fork cycle of the redis db will clear it from your harddrive

let intervalReference;

const client = redis.createClient({
  host: "127.0.0.1",
  port: "6379",
  password: "foobared" // here goes your password!
});
const ttl = promisify(client.ttl).bind(client);

client.on("ready", () => {
  performDbCheck(); // init right away on start
  intervalReference = setInterval(() => {
    performDbCheck();
  }, intervalTimer);
});

function performDbCheck() {
  console.info("[" + new Date() + "] RedisDB check...");
  client.keys("RawTravelData:*", async (err, keys) => {
    if (err) {
      console.error(err);
      return;
    }
    for (let key of keys) {
      const remaining = await ttl(key);
      if (remaining === -1) {
        console.info("has no expiration time, setting new one");
        await client.expire(key, expirationTime);
        console.info(key + " - add new expiration seconds: " + await ttl(key));
      } else if (remaining < 30) {
        console.info(key + " - is about to expire, remaining seconds: " + remaining);
      }
    }
  });
}

client.on("error", err => {
  clearInterval(intervalReference);
  if (err["code"] && err["code"].indexOf("ECONNRESET") > -1) {
    console.info("Lost RedisDB connection, trying to reconnect...");
  } else if (err["code"] && err["code"].indexOf("ECONNREFUSED") > -1) {
    console.info("Cannot connect to RedisDB, retrying...");
  } else {
    console.error(err);
  }
});

// Respond to 'Ctrl+C'
process.on("SIGINT", () => {
  clearInterval(intervalReference);
  process.exit(0);
});

// Respond to shutting down or closing
process.on("SIGTERM", () => {
  clearInterval(intervalReference);
  process.exit(0);
});
