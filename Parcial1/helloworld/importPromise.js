export const promiseText = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise error');
  }, 2000);
});

export const wait2Seconds = (showResolve = true) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      showResolve ? resolve('Promise Succeeded') : reject('Promise error');
    }, 2000);
  });

  return promise;
};

export const wait2SecondsAsync = (showResolve = true) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      showResolve ? resolve('Promise Succeeded') : reject('Promise error');
    }, 2000);
  });

  return promise;
};
