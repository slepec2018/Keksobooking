import {generatedAdverts} from './data.js';
import { fillSimilarCards } from './similar_items.js';
import { deactivateForm, activateForm } from './switch_forms.js';

deactivateForm();

const pointSimilarCards = document.querySelector('.map__canvas');
pointSimilarCards.append(fillSimilarCards(generatedAdverts()));

activateForm();


