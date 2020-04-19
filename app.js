const express = require('express');
const app = express();

app.use(express.static('./static'));
app.use('/web_modules', express.static('./web_modules'));
app.listen(80, () => {
  console.log('Listening on port 80');
});
