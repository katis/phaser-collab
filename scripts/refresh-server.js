const http = require("http");

const sseCallbacks = {};

function addCallback(key, cb) {
  if (!sseCallbacks[key]) {
    sseCallbacks[key] = new Set();
  }
  sseCallbacks[key].add(cb);
}

function removeCallback(key, cb) {
  const callbacks = sseCallbacks[key];
  if (!callbacks) return;
  callbacks.delete(cb);
}

function eventMessage(name, data = "none") {
  return [`event: ${name}`, `data: ${data}`, "\n"].join("\n");
}

async function subscribeRefreshEvents(path, req, res) {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  });

  function sendRefresh() {
    res.write(eventMessage("refresh"));
  }

  addCallback(path, sendRefresh);

  res.write(eventMessage("ping"));

  function dispose() {
    removeCallback(path, sendRefresh);
  }

  req.on("close", dispose);
}

function removePrefix(str, prefix) {
  return str.startsWith(prefix) ? str.slice(prefix.length) : str;
}

function requestListener(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "accept, accept-encoding, accept-language, cache-control, connection, host, origin, pragma, user-agent"
  );
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method !== "GET") return;

  if (req.url.startsWith("/refresh-events")) {
    const path = removePrefix(req.url, "/refresh-events");
    subscribeRefreshEvents(path, req, res);
  } else {
    const callbacks = sseCallbacks[req.url];
    if (!callbacks) {
      res.writeHead(200).end("No such page");
    } else {
      res.writeHead(200).end(`Refreshed ${callbacks.size} pages`);
      callbacks.forEach((l) => l());
    }
  }
}

const server = http.createServer(requestListener);
server.listen(8321);
