// server.ts

import { createServer } from "http";
import { parse } from "url";
import next from "next";
import { createProxyMiddleware } from "http-proxy-middleware";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    const { pathname } = parsedUrl;

    // Define the path you want to proxy for api.malsync.moe
    if (pathname && pathname.startsWith("/mal")) {
      const proxy = createProxyMiddleware({
        target: "https://api.malsync.moe",
        changeOrigin: true, // Required for virtual hosted sites
        pathRewrite: { "^/mal": "" },
      }) as any; // Type assertion indicating proxy is a function

      proxy(req, res);
    }
    // Define the path you want to proxy for api.anify.tv
    else if (pathname && pathname.startsWith("/info")) {
      const proxy = createProxyMiddleware({
        target: "https://api.anify.tv",
        changeOrigin: true, // Required for virtual hosted sites
        pathRewrite: { "^/info": "" },
      }) as any; // Type assertion indicating proxy is a function

      proxy(req, res);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, () => {
    console.log("> Ready on http://localhost:3000");
  });
});
