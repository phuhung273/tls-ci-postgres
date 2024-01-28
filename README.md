
### Reference: https://github.com/nicferrier/nodejs-self-signed-cert-server-and-client
openssl genrsa -out ca.key 2048

openssl req -x509 -new -nodes -key ca.key -days 365 -out cacert.pem -subj "/CN=example.com"

openssl genrsa -out my.key 2048

openssl req -new -key my.key -out my.csr -subj "/CN=localhost"

openssl x509 -req -in my.csr -CA cacert.pem -CAkey ca.key -days 365 -out cert.pem

### For some library in NodeJS
set NODE_EXTRA_CA_CERTS=<Path to cacert.pem>