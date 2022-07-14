import db from './db';

const getError = (err) => {
  return err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message;
};

// eslint-disable-next-line no-unused-vars
const onError = async (err, req, res, next) => {
  await db.disconnect();
  //   console.log(err);
  res.status(500).send({ message: err.toString() });
};

export { getError, onError };
