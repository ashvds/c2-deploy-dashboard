import aws_sdk from 'aws-sdk'
// 
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-southeast-2'});

// Create S3 service object
var s3 = new AWS.S3();



export const listOfObjects = ():  Promise<Array<string>> => {
  
  console.log('Calling S3');
  
  return new Promise((resolve,reject) => {
    // Create the parameters for calling listObjects
    var bucketParams = {
      Bucket : "ashvds.bob"
      // Prefix: '/'
    };
    s3.listObjectsV2(bucketParams, (err: aws_sdk.AWSError, data: aws_sdk.S3.ListObjectsOutput) => {
      if (err) reject(err);
      let listOfKeys : Array<string>= [];
      //     console.log(`json ${JSON.stringify(data.Contents)}`);
      //     return data
      if (!!data.Contents) 
      data.Contents.forEach(s3Object => {
        if (s3Object.Key !== undefined) {
          listOfKeys.push(s3Object.Key)
          console.log(`inside list of keys ${s3Object.Key}`);
        }
      }); 
      resolve (listOfKeys);
    });
    
  }) 
  
};


export async function s3ReadJSON() {
  return new Promise((resolve,reject) => {
    var bucketParams = {
      Bucket : "ashvds.bob",
      Key : "master/state.json"
    };
    
    const stream = s3.getObject(bucketParams);
    
    console.log(stream.body);
    resolve(stream)
  });
};

// for (let i in slaveNamesLocations){
//   console.log(`my iterator ${slaveNamesLocations[i]}`);

// };
// res.send(slaveNamesLocations);

