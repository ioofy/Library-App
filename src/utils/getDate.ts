import moment from "moment";

export const getDate = (date: Date) => {
  const actualDate = moment(date).format("MMM DD, YYYY");

  return actualDate;
};
