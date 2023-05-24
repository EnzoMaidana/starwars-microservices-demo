const app = require('./app');

async function main(){
    await app.listen(3002);
    console.log('Server is running in port 3002');
}

main();