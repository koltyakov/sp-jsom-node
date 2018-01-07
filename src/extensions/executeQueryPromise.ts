export const executeQueryPromise = (clientContext: SP.ClientRuntimeContext): Promise<void> => {
  return new Promise((resolve, reject) => {
    clientContext
      .executeQueryAsync(
        resolve,
        (...args) => reject(args[1].get_message())
      );
  });
};
