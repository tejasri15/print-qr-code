console.log("simple way to create a qr code");


// import statemnets are required
const fs = require('fs');
const qrcode = require('qrcode');


// if any errors
run().catch(error => console.error(error.stack));


// to display the qr code...... and stored in a seperate htnml file...
async function run() {
  const res = await qrcode.toDataURL('http://asyncawait.net');

  fs.writeFileSync('./qr.html', `<img src="${res}">`);
  console.log('Wrote to ./qr.html');
}