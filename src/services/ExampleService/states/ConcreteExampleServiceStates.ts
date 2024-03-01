import { State } from "./AbstractExampleServiceState";

export class StateA extends State {
  public handle1(): void {
    console.log("StateA handles request1.");
  }
  public handle2(): void {
    console.log("StateA handles request2.");
  }
}

export class StateB extends State {
  public handle1(): void {
    console.log("StateB handles request1.");
  }
  public handle2(): void {
    console.log("StateB handles request2.");
  }
}

export class StateC extends State {
  public handle1(): void {
    console.log("StateC handles request1.");
  }
  public handle2(): void {
    console.log("StateC handles request2.");
  }
}

