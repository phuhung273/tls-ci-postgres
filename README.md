
### Solution 1: 
Reference:
- https://gist.github.com/mrw34/c97bb03ea1054afb551886ffc8b63c3b
- https://devopscube.com/create-self-signed-certificates-openssl/

openssl req -x509 -sha256 -days 356 -nodes -newkey rsa:2048 -subj /CN=localhost -keyout rootCA.key -out rootCA.crt

openssl genrsa -out server.key 2048

openssl req -new -key server.key -out server.csr -config csr.conf

openssl x509 -req -in server.csr -CA rootCA.crt -CAkey rootCA.key -CAcreateserial -out server.crt -days 365 -sha256 -extfile cert.conf



### Solution 2: https://gist.github.com/cecilemuller/9492b848eb8fe46d462abeb26656c4f8
openssl req -x509 -nodes -new -sha256 -days 1024 -newkey rsa:2048 -keyout RootCA.key -out RootCA.pem -subj "/C=US/CN=Example-Root-CA"

openssl x509 -outform pem -in RootCA.pem -out RootCA.crt

openssl req -new -nodes -newkey rsa:2048 -keyout server.key -out server.csr -subj "/C=US/ST=YourState/L=YourCity/O=Example-Certificates/CN=localhost.local"

openssl x509 -req -sha256 -days 1024 -in server.csr -CA RootCA.pem -CAkey RootCA.key -CAcreateserial -extfile cert.conf -out server.crt



### Solution 3: https://github.com/nicferrier/nodejs-self-signed-cert-server-and-client
openssl genrsa -out ca.key 2048

openssl req -x509 -new -nodes -key ca.key -days 365 -out cacert.pem -subj "/CN=example.com"

openssl genrsa -out my.key 2048

openssl req -new -key my.key -out my.csr -subj "/CN=localhost"

openssl x509 -req -in my.csr -CA cacert.pem -CAkey ca.key -days 365 -out cert.pem
