#!/bin/bash
echo "Configuring remote DB for borderless app..."
HOST=https://still-garden-49949.herokuapp.com # or whatever you got
echo $HOST

echo "Enabling CORS..."
curl -X PUT $HOST/_config/httpd/enable_cors -d '"true"'
curl -X PUT $HOST/_config/cors/origins -d '"*"'
curl -X PUT $HOST/_config/cors/credentials -d '"true"'
curl -X PUT $HOST/_config/cors/methods -d '"GET, PUT, POST, HEAD, DELETE"'
curl -X PUT $HOST/_config/cors/headers -d '"accept, authorization, content-type, origin, referer, x-csrf-token"'

echo "Creating DB..."
curl -X PUT $HOST/thekraken-test