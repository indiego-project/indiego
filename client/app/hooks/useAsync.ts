import { useEffect, useState } from "react";

/** custom hooks for dealing with async value, very similar to useQuery for ReactQuery
 @callback : callback returns promise | promises
 @isList : boolean for if the callback need Promise.all
 
 @returns {status: async-status, value: resolved-promise}
*/
export function useAsync<T>(
  callback: (...args: any[]) => Promise<T> | Promise<T>[],
  isList: boolean = false
) {
  const [status, setStatus] = useState<"pending" | "success" | "error">(
    "pending"
  );
  const [result, setResult] = useState<T | Awaited<T>[]>();

  useEffect(() => {
    if (isList) {
      Promise.all(callback() as Promise<T>[])
        .then((value) => {
          setResult(value);
          setStatus("success");
        })
        .catch((err) => {
          setStatus("error");
          setResult(err);
        });
    } else {
      (callback() as Promise<T>)
        .then((value) => {
          setResult(value);
          setStatus("success");
        })
        .catch((err) => {
          setStatus("error");
          setResult(err);
        });
    }
  }, []);

  return { status, result };
}
