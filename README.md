### Parse Ion Lambda
This is a lambda function used to handle QLDB Kinesis Stream on AWS Firehorse
The goal is to parse the Ion records to JSON objects and send only `Revision Details` stream blocks

### Generating zip
On terminal run:
```bash
$ zip -r function.zip node_modules index.js
```

### References:
- [QLDB](https://docs.aws.amazon.com/qldb/latest/developerguide/what-is.html)
- [Stream Records](https://docs.aws.amazon.com/qldb/latest/developerguide/streams.records.html)
- [AWS Lambda NodeJS packages](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html)
- [ion-js](https://www.npmjs.com/package/ion-js)
