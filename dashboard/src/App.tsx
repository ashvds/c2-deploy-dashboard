import React from 'react';
import './App.css';
// // import entire SDK
import AWS from 'aws-sdk';
// // import AWS object without services
// import AWS from 'aws-sdk/global';
// // import individual service
import S3, { ListObjectsOutput } from 'aws-sdk/clients/s3';

// // Load the AWS SDK for Node.js
var AWSenv = require('aws-sdk');
// // Set the region 
AWSenv.config.update({region: 'REGION'});

// // Create S3 service object


const getKeys = async () =>{
 
 
  var aws_region  = process.env['AWS_REGION'] ? process.env['AWS_REGION'] : 'ap-southeast-2'
var aws_profile = process.env['AWS_PROFILE'] ?  process.env['AWS_PROFILE'] : 'default'
  // AWS.CredentialProviderChain.defaultProviders = [
  // //   function () { return new AWS.EnvironmentCredentials('AWS'); },
  // //   function () { return new AWS.EnvironmentCredentials('AMAZON'); },
  //    function () { return new AWS.SharedIniFileCredentials({profile: aws_profile ? aws_profile : 'default' }); },
     
  // //   function () { return new AWS.EC2MetadataCredentials(); }
  // ];
  
  // var chain = new AWS.CredentialProviderChain();
  
  // chain.resolve((err:AWS.AWSError, cred:AWS.Credentials)=>{
  //   AWS.config.credentials = cred;
  // })
  
  var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;
  // // Create the parameters for calling listObjects
  var bucketParams = {
     Bucket : 'ashvds.bob',
   };
   const s3 = new AWS.S3({apiVersion: '2006-03-01'});
  // // Call S3 to obtain a list of the objects in the bucket
   s3.listObjects(bucketParams, function(err:AWS.AWSError, data:S3.ListObjectsOutput) {
     if (err) {
       console.log("Error", err);
     } else {
       console.log("Success", data);
  
     }
   });
  // 
  // Storage.configure({
  //   AWSS3: {
  //       bucket: 'ashvds.bob',//Your bucket name;
  //       region: 'ap-southeast-2',//Specify the region your bucket was created in;
  //       level: 'private'
  //   }
  // });
  // Storage.list('releases/')
  //   .then(result => console.log(result))
  //   .catch(err => console.log(err));
    
}

const App: React.FC = () => {
  
  console.log("test")
  return (
    <div className="App">
      <header className="App-header">
        Camus2 Dashboard
       </header>
      <button onClick={getKeys}>S3 Query</button>
    </div>
  );
}

export default App;
