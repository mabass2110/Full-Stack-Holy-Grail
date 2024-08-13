var express = require("express");
var app = express();
const createClient = require("createClient");

//TODO: create a redis client
const client = await createClient()
  .on('error', err => console.log('Redis Client Error', err))
  .connect();

// serve static files from public directory
app.use(express.static("public"));

// TODO: initialize values for: header, left, right, article and footer using the redis client
await client.set('key', 'value',{
  header: 0,
  left: 0,
  article: 0,
  article: 0,
  right: 0,
  footer: 0
})
// Get values for holy grail layout
function data() {
  // TODO: uses Promise to get the values for header, left, right, article and footer from Redis
}

// plus
app.get("/update/:key/:value", function (req, res) {
  const key = req.params.key;
  let value = Number(req.params.value);

  //TODO: use the redis client to update the value associated with the given key
});

// get key data
app.get("/data", function (req, res) {
  data().then((data) => {
    console.log(data);
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log("Running on 3000");
});

process.on("exit", function () {
  client.quit();
});
