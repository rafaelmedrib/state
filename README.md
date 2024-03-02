# State Pattern

This is a simple example of the state pattern in TS. 
The main objective here is to show how this pattern can be used in a workflow that leverages feature toggles to control the release of new features in a trunk based development environment.
Each environment (dev, staging, prod) has its own set of feature toggles that can be turned on or off.

## Usage
In the `feature_toggles.json` file you can define the feature toggles state.
Then run the application with:
```bash
npm start
```
The application will read the `feature_toggles.json` and populate the environment with the state for each service.

## Next Steps
- Use an IoC tool to inject the state into the services and remove the BaseService class.
- Create an scaffolding library to manage the feature_toggles.json file and the service boilerplate code.
- Create a git hook to test if the feature toggles are in sync with the code and prevent the commit if they are not. 