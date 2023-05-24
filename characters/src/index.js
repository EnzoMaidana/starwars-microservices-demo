const app = require('./app');

async function main(){
    await app.listen(3001);
    console.log('Server is running in port 3001');
}

main();