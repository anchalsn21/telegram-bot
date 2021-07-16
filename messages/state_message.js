const { STATE_NAMES } = require("../contants");
const createStateReply = async (data, state) => {
  let message = `
    ${STATE_NAMES[state]}

    Daily Stats
   --------------------
    confirmed : ${data.delta.confirmed ? data.delta.confirmed : "----"}
    deceased : ${data.delta.deceased ? data.delta.deceased : "----"}
    recovered : ${data.delta.recovered ? data.delta.recovered : "----"}
    tested : ${data.delta.tested ? data.delta.tested : "----"}

    --------------------

    Overall Stats

    --------------------
    confirmed : ${data.total.confirmed ? data.total.confirmed : "----"}
    deceased : ${data.total.deceased ? data.total.deceased : "----"}
    recovered : ${data.total.recovered ? data.total.recovered : "----"}
    tested : ${data.total.tested ? data.total.tested : "----"}

    --------------------

    `;

  return message;
};

module.exports = { createStateReply };
