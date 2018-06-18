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
  if (!category) { return '' }

  const splitted = category.split('.');
  const acc = splitted.reduce(
    (acc: CategoryCaptionAccumulator, categoryPart: string) => {
      if (isUndefined(acc.compositCategory)) {
        acc.compositCategory = categoryPart;
        const categorySelected = selectCategory(category);
        if (categorySelected === null) { return acc }
        acc.compositCaption = capitalizeFirstLetter(categorySelected.name.toLocaleLowerCase());
      } else {
        acc.compositCategory = `${acc.compositCategory}.${categoryPart}`;
        const categorySelected = selectCategory(category);
        if (categorySelected === null) { return acc }
        acc.compositCaption = `${acc.compositCaption}, ${categorySelected.name.toLocaleLowerCase()}`;
      }
      return acc;
    }, {} as CategoryCaptionAccumulator);

  return acc.compositCaption;
};
