const app = require('./app');

async function main() {
    await app.listen(3004);
    console.log('Database is running in port 3004');
};

main()