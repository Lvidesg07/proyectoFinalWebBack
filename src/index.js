const app = require("./app/app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App está ejecutándose en localhost:${port}`);
});

