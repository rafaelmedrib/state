import { ExampleServiceContext } from "../ExampleServiceContext";

export abstract class State {
  protected context!: ExampleServiceContext;

  public setContext(context: ExampleServiceContext) {
    this.context = context;
  }

  public abstract handle1(): void;

  public abstract handle2(): void;
}