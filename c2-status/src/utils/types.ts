//cause typescript and es6 map seems to not function reliably...
export type StringMap = { [x: string]: string; };

export type S3Params = {
    Bucket: string; /* required */
    // Expression: string /* required */
    // ExpressionType: 'SQL' /* required */
    // InputSerialization: { /* required */
    //   CSV: {
    //     AllowQuotedRecordDelimiter: true //|| false,
    //     Comments: string,
    //     FieldDelimiter: string,
    //     FileHeaderInfo: 'USE', //| IGNORE | NONE,
    //     QuoteCharacter: string,
    //     QuoteEscapeCharacter: string,
    //     RecordDelimiter: string
    //   },
    //   CompressionType: NONE, //| GZIP | BZIP2,
    //   JSON: {
    //     Type: DOCUMENT //| LINES
    //   },
    //   Parquet: {
    //   }
    // },
    Key: string; /* required */
    // OutputSerialization: { /* required */
    //   CSV: {
    //     FieldDelimiter: string,
    //     QuoteCharacter: string,
    //     QuoteEscapeCharacter: string,
    //     QuoteFields: ALWAYS | ASNEEDED,
    //     RecordDelimiter: string
    //   },
    //   JSON: {
    //     RecordDelimiter: string
    //   }
    // },
    // RequestProgress: {
    //   Enabled: true || false
    // },
    // SSECustomerAlgorithm: string,
    // SSECustomerKey: Buffer.from('...') || string /* Strings will be Base-64 encoded on your behalf */,
    // SSECustomerKeyMD5: string
  };