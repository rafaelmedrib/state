import { State } from "./states/AbstractExampleServiceState";

export class ExampleServiceContext {
  private state!: State;

  constructor(state: State) {
    this.transitionTo(state);
  }

  public transitionTo(state: State) {
    console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  public request1() {
    this.state.handle1();
  }

  public request2() {
    this.state.handle2();
  }
}