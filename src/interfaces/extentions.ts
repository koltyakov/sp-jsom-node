export {};

declare global {
  namespace SP {
    interface ClientRuntimeContext {
      executeQueryPromise (): Promise<void>;
    }
  }
}
