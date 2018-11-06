// take some code from
// https://github.com/ReactTraining/history/blob/master/modules/createHashHistory.js

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  const href = window.location.href;
  const hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = '#' + path;
}

function replaceHashPath(path) {
  const hashIndex = window.location.href.indexOf('#');
  window.location.replace(
    window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path
  );
}

let createHashSource = (initialPathname = '/') => {
  let index = 0;
  // let stack = [{ pathname: initialPathname, search: '' }];
  // let states = [];

  return {
    get location() {
      return { pathname: getHashPath(), search: '' };
      // return stack[index];
    },
    addEventListener(name, fn) {
      if (name === 'popstate') {
        window.addEventListener('hashchange', fn);
      }
    },
    removeEventListener(name, fn) {
      if (name === 'popstate') {
        window.addEventListener('hashchange', fn);
      }
    },
    history: {
      get entries() {
        return [{ pathname: getHashPath(), search: '' }];
        // return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return undefined;
        // return states[index];
      },
      pushState(state, _, uri) {
        pushHashPath(uri);
        // let [pathname, search = ''] = uri.split('?');
        // index++;
        // stack.push({ pathname, search });
        // states.push(state);
      },
      replaceState(state, _, uri) {
        replaceHashPath(uri);
        // let [pathname, search = ''] = uri.split('?');
        // stack[index] = { pathname, search };
        // states[index] = state;
      }
    }
  };
};

export { createHashSource };
