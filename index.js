const Express = require('express');
const app = Express();

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.listen(8000, () => console.log('started on port 8000'));
