import { ICounter } from 'core/models/counter';
import { IStars } from 'core/models/stars';

export interface IStore {
  counter: ICounter;
  stars: IStars;
}
