const app = require('./app')
const port = 3300

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`);
})