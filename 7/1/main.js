import { legacy_createStore as createStore } from 'redux';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#previous');
const randomBtn = document.querySelector('#random');
const showValue = document.querySelector('#value');

const getRandomColor = () => Math.floor(Math.random() * 0xffffff).toString(16);

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? state.colors.length - 1 : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? 0 : state.index - 1,
      };
    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors, getRandomColor()],
        index: state.colors.length,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  const { colors, index } = store.getState();
  showValue.textContent = colors[index];
});

nextBtn.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
});

prevBtn.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
});

randomBtn.addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM_COLOR' });
});
