import { StateA, StateB, StateC } from "./states/ConcreteExampleServiceStates"
import { ExampleServiceContext } from "./ExampleServiceContext"
import BaseService from "../BaseService";
import { State } from "./states/AbstractExampleServiceState";

export default class ExampleService extends BaseService {
  constructor() {
    super()
  }

  private static states: Record<string, State> = {
    "StateA": new StateA(),
    "StateB": new StateB(),
    "StateC": new StateC()
  }

  public createInstance() {
    return new ExampleServiceContext(this.pickState());
  }
}