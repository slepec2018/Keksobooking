import {generatedAdverts} from './data.js';
import { fillSimilarCards } from './similar_items.js';

const pointSimilarCards = document.querySelector('.map__canvas');

pointSimilarCards.append(fillSimilarCards(generatedAdverts()));



