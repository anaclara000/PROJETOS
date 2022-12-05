const Express = require('express');
const cors = require('cors');

const routes = require('./src/routes.js');

const app = Express();
app.use(cors());
app.use(Express.json());

app.use(routes);

app.listen(3000, () => {
    console.log("App ON");
});