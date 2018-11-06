import { createHashHistory } from 'history';

let getLocation = history => {
  return Object.assign({}, history.location, {
    state: history.state,
    key: (history.state && history.state.key) || 'initial'
  });
};

let createHistory = () => {
  const history = createHashHistory();
  let listeners = [];
  let location = getLocation(history);
  let transitioning = false;
  let resolveTransition = () => {};

  history.listen(() => {
    location = getLocation(history);
  });

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },

    listen(listener) {
      return history.listen(listener);
    },

    navigate(to, { state, replace = false } = {}) {
      // const state_ = Object.assign({}, state, { key: String(Date.now()) });
      // state will be ignored on hash history

      // try...catch iOS Safari limits to 100 pushState calls
      try {
        if (transitioning || replace) {
          history.replace(to, undefined);
        } else {
          history.push(to, undefined);
        }
      } catch (e) {
        history.location[replace ? 'replace' : 'assign'](to);
      }

      location = getLocation(history);
      transitioning = true;
      let transition = new Promise(res => { resolveTransition = res; return res });
      listeners.forEach(listener => listener({ location, action: 'PUSH' }));
      return transition;
    }
  };
};

export { createHistory };
