This application was created using the create express component, and demonstrates how to verify the JWT authentication tokens used by AWS Cognito in an express based node.js service. See my article [AWS Cognito example using React UI and Node.js REST APIs — part 3 (JWT secured REST APIs)](https://medium.com/@arron.harden/aws-cognito-example-using-react-ui-and-node-js-rest-apis-part-3-jwt-secured-rest-apis-e56d336ce306) for more information.

## Running the application

1. Modify `src/config/app-config.json` to match your user pool and application URLs. When running locally with the UI, the `signoutUri` will property need to be `http://localhost:3000/` and the `callbackUri` property will need to be `http://localhost:3000/callback`.
2. Run `npm install` to setup and install the dependencies.
3. Run `DEBUG=cognito-demo-service:* npm start` to start the service.
4. The service will start listening at `http:localhost:3010`.
5. Using curl call the GET /users REST API:

```
curl -X GET http://localhost:3010/users -H 'Authorization: Bearer <your_JWT_token>'
```

and if successful you should see the following type of response:

```
Successfully verified JWT token. Extracted information: {"sub":"1f0be62f-ffcd-49ca-b5a4-18f0bf62e0e6","token_use":"access","scope":["openid","profile","https://cognito-demo-api.arronharden.com/hello-world.all","email"],"username":"arron"}
```

## React UI client
The source for an example React UI application which invokes this REST API is contained in the repo at https://github.com/arronharden/cognito-demo-ui. A running instance of this React application is hosted at https://cognito-demo.arronharden.com.

## Example
A running instance of this REST API is hosted at https://cognito-demo-api.arronharden.com. 

## About me
I'm a cloud/SaaS architect and lead full stack engineer, living in Milton Keynes (UK). More information about me can be found on my profile at https://arronharden.com.
