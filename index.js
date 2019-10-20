require("dotenv").config(); //loads .env variable
const server = require("./api/server");

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`api running on port ${PORT}`);
});
