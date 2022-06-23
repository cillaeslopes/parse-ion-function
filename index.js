console.log('Loading function');
const ion = require("ion-js");

exports.handler = async (event, context) => {
  /* Process the list of records and transform them */
  const output = event.records.map((record) => {
    const buffer = Buffer.from(record.data, "base64").toString();
    const ionData = ion.load(buffer);
    const data = JSON.parse(JSON.stringify(ionData));

    const isRevisionDetailsBlock = data.recordType === "REVISION_DETAILS";
    if (isRevisionDetailsBlock) {
      const parsedData = Buffer.from(JSON.stringify(data)).toString("base64");
      return {
        recordId: record.recordId,
        result: 'Ok',
        data: parsedData,
      };
    }
  }).filter((record) => !!record);
  console.log(`Processing completed.  Successful records ${output.length}.`);
  return { records: output };
};
