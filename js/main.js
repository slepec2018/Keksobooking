import './forms.js';
import './map.js';
import { takeData } from './serv.js';
import { manageData } from './filters.js';

// Запуск формирвоания карточек объявлений с данными с сервера или аварийными моками
takeData().then(manageData);


