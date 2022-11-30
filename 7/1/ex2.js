import { combineReducers, legacy_createStore as createStore } from 'redux';

const THEME_INITIAL_STATE = {
  theme: 'dark',
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'changeTheme':
      return {
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };
    default:
      return state;
  }
};

const STATUS_INITIAL_STATE = {
  status: 'Offline',
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'changeStatus':
      return {
        status: state.status === 'Offline' ? 'Online' : 'Offline',
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ style: themeReducer, mode: statusReducer });

const store = createStore(rootReducer);

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');
const statusSpan = document.getElementById('status');
const main = document.body;

store.subscribe(() => {
  const {
    style: { theme },
    mode: { status },
  } = store.getState();
  main.className = theme;
  statusSpan.textContent = status;
  themeButton.textContent = `${theme === 'light' ? 'Dark' : 'Light'} Mode`;
  statusButton.textContent = `Ficar ${status === 'Online' ? 'Offline' : 'Online'}`;
});

themeButton.addEventListener('click', () => {
  store.dispatch({ type: 'changeTheme' });
});

statusButton.addEventListener('click', () => {
  store.dispatch({ type: 'changeStatus' });
});
