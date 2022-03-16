import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.scss';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from './redux/rootReduser';
import { saveDateInLocal } from './redux/middlewares/saveDataInLocal';

const store = createStore(rootReducer, compose(applyMiddleware(saveDateInLocal),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const app = <Provider store={store}>
  <App/>
</Provider>


ReactDOM.render(app, document.getElementById('root'));


// календарь на весь экран
// Каждый день календаря - это просто кол-во часов, но при нажатии появляется вся статистика
// 1 станица - список работников
// 2 страница - список всех табелей/графиков этого работника
// 3 страница - выбранный табель/график работника
// список работников - state номер 1
// данные о работниках - state номер 2

// потом сделать свои кнопки - css module