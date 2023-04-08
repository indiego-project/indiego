export default function useDebounce(callback) {
  let isCalled = false;

  const deBouncedCallback = (...args) => {
    if (!isCalled) {
      callback(...args);
      isCalled = true;
    } else {
      let timer = null;
      clearTimeout(timer);
      timer = setTimeout(() => {
        isCalled = false;
      }, 100);
    }
  };

  return deBouncedCallback;
}
