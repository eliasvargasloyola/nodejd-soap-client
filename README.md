# Call Soap Server From NodeJS

In this project you can find a complete configuration to consume a SOAP service with NodeJS.

The project is based on `node-soap`
documentation [HERE](https://github.com/vpulim/node-soap#soapcreateclientasyncurl-options---create-a-new-soap-client-from-a-wsdl-url-also-supports-a-local-filesystem-path)

### Versions

- NodeJS 12.22
- npm 6.14

### Pre-Conditions

You must have a SOAP service to be consumed in this project I used a SOAP service
published [HERE](https://github.com/eliasvargasloyola/soap-service-example)

To set your URL you must override the environment variable `process.env.SOAP_URL` by default is.

http://localhost/ws/service.wsdl

### Commands to init

1. `npm install`
2. `npm run start`

The service will be exposed in

- http://localhost:3000/soap
