/// <reference path="./../../../node_modules/@types/sharepoint/index.d.ts" />

export const executeQueryPromise = (ctx: SP.ClientContext) => {
  return new Promise((resolve, reject) => {
    ctx.executeQueryAsync(resolve, (...args) => reject(args[1].get_message()));
  });
};
