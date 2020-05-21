const express = require('express');
const path = require('path');

// Create global app object
const app = express();

app.use(express.static('./build'));

// Landing page
app.get('/', (req, res) => {
  res.sendFile(path.resolve('./build/index.html'));
});

const port = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server started on localhost:${port}`));
