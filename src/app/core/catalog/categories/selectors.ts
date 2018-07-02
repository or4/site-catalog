import { AppState } from 'store/reducers';
import { capitalizeFirstLetter, isUndefined } from 'core/common';
import { TCategory } from 'core/types';


export const selectCategory = (state: AppState, category: string) => {
  return state.categories.indexed[category];
};


type CategoryCaptionAccumulator = {
  compositCaption: string;
  compositCategory: string;
};

/**
 * Return Caption as Parent, Child level 1, Child level 2..
 */
export const getCategoryCaption = (state: AppState, category: TCategory) => {
  if (!category) { return '' }
  if (category.id === null) {
    return 'Все товары';
  }

  const splitted = category.id.split('.');

  const acc = splitted.reduce(
    (acc: CategoryCaptionAccumulator, categoryPart: string) => {

      const isNew = isUndefined(acc.compositCategory);
      acc.compositCategory = isNew ? categoryPart : `${acc.compositCategory}.${categoryPart}`;

      const categorySelected = selectCategory(state, categoryPart);
      if (!categorySelected) { return acc }
      const categoryName = categorySelected.name.toLocaleLowerCase();
      acc.compositCaption = isNew ? capitalizeFirstLetter(categoryName) : `${acc.compositCaption}, ${categoryName}`;

      return acc;
    }, {} as CategoryCaptionAccumulator);

  return acc.compositCaption;
};

