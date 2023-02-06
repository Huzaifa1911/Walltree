import {anyPass, isEmpty, isNil} from 'ramda';

export const isEmptyOrNil = anyPass([isEmpty, isNil]);

export const getNameLiterals = (name: string) => {
  let arr = name.replace(/\s+/g, ' ').split(' ');

  const slicedName = arr.join(' ');
  const matches = slicedName.match(/\b(\w)/g) || [];
  const acronym = !isEmptyOrNil(matches) && matches.slice(0, 2).join('');
  if (acronym) return acronym.toUpperCase();
  return 'U';
};
