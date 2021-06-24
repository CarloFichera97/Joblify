const express = require("express");
const path = require("path");
const serveFavicon = require("serve-favicon");
const app = express();
const publicPath = path.join(__dirname, "./../", "public");
const port = process.env.PORT || 3010;

app.use(express.static(publicPath));

app.use(
  serveFaviconpath.join((__dirname, "./../", "public", "images", "favicon.png"))
);
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log("Server is up and running");
});
