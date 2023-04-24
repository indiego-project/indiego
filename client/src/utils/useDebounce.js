export default function useDebounce(callback) {
  let isCalled = false;
  let timer = null;

  const deBouncedCallback = (...args) => {
    if (!isCalled) {
      callback(...args);
      isCalled = true;
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        isCalled = false;
        callback(...args);
      }, 100);
    }
  };

  return deBouncedCallback;
}
