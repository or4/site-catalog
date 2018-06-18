import { TCategory } from 'core/catalog/categories/types';
import { capitalizeFirstLetter, isUndefined } from 'core/common';

type CategoryCaptionAccumulator = {
  compositCaption: string;
  compositCategory: string;
};

/**
 * Return Caption as Parent, Child level 1, Child level 2..
 */
export const getCategoryCaption = (category: string, selectCategory: (category : string) => TCategory) => {
  const splitted = category.split('.');
  const acc = splitted.reduce(
    (acc: CategoryCaptionAccumulator, categoryPart: string) => {
      if (isUndefined(acc.compositCategory)) {
        acc.compositCategory = categoryPart;
        acc.compositCaption = capitalizeFirstLetter(selectCategory(category).name.toLocaleLowerCase());
      } else {
        acc.compositCategory = `${acc.compositCategory}.${categoryPart}`;
        acc.compositCaption = `${acc.compositCaption}, ${selectCategory(category).name.toLocaleLowerCase()}`;
      }
      return acc;
    }, {} as CategoryCaptionAccumulator);

  return acc.compositCaption;
};
