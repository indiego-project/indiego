/**
 * function for creating wrapper function to use <Suspense>
 * (<Suspense> 쓰려고 만들었다가 방향을 바꾸면서 애매해짐)
 * @param promise : actual promise return function
 * @param postProcessor : function runs right after promise resolved
 * @param callback : function runs right before <Suspense> display
 * @returns
 */

export function createSuspenseValue<T>(
  promise: Promise<T> | Promise<T>[],
  postProcessor?: (res: T | T[]) => any,
  callback?: (...args: any[]) => void
) {
  let status: "pending" | "success" | "error" = "pending";
  let result: T | Awaited<T>[];

  if (Array.isArray(promise)) {
    Promise.all(promise)
      .then((res) => {
        if (postProcessor) {
          result = postProcessor(res);
        } else {
          result = res;
        }
        status = "success";
      })
      .catch((err) => {
        result = err;
        status = "error";
      });
  } else {
    promise
      .then((res) => {
        status = "success";
        if (postProcessor) {
          result = postProcessor(res);
        } else {
          result = res;
        }
      })
      .catch((err) => {
        status = "error";
        result = err;
      });
  }

  return {
    status,
    read: () => {
      if (status === "pending") {
        if (Array.isArray(promise)) {
          throw promise[0];
        } else {
          throw promise;
        }
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        if (callback) callback();
        return result;
      }
    },
  };
}
