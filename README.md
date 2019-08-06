This application was created from the create express component, and demonstrates how to verify the JWT authentication tokens used by AWS Cognito in an express based node.js service. See <TBD> on medium.com for more information.

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