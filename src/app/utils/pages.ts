
const base = 1;
export const getPrevPage = (page: number, diff: number) => {
  return (page >= (base + diff) ? page - diff : page);
};
export const getNextPage = (page: number, diff: number, totalPages: number) => {
  return (page + diff) <= totalPages ? page + diff : page;
};