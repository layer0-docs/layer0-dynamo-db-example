# layer0-dynamo-db-example

An example that shows you how to connect to DynamoDB from within a Layer0 serverless function

## Running Locally

```
npm i -g @layer0/cli
npm install
0 dev
```

- Copy .env.example to .env and fill in your AWS access key and AWS secret key.
- Create a DynamoDB table named `layer0-poc-users` and add some records to it.
- Go to https://localhost:3000
- You should see the contents of your `layer0-poc-users` table returned as JSON

## Deploying to Layer0

If you haven't already, [sign up for an account](https://app.layer0.co).

Then, to deploy this app to Layer0:

```
0 deploy
```

- Open you site in Layer0 Developer Console, navigate to the default environment, and follow the [secrets guide](https://docs.layer0.co/guides/security#section_secrets) to add your `ACCESS_KEY` and `SECRET_KEY`.
- Activate the updated environment config. Once the site finishes redeploying, the root URL will return the same JSON data that you see locally.
