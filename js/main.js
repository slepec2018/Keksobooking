import './forms.js';
import './map.js';
import { takeData } from './serv.js';
import { manageData } from './filters.js';

// Starting the formation of ad cards with data from the server or emergency mocks
takeData().then(manageData);


