import types = require ("../utils/types")


export const fromKeys = (listOfKeys : Array<string>):  types.StringMap => {
    console.log(`fromKeys ${listOfKeys}`);
    
    let slaveStateFiles :types.StringMap = {}//new Map<string,string>();
    let keyPieces : Array<string> = [];
    
    listOfKeys.map((keyname) => {
        keyPieces = keyname.split("/");
        let slaveName = keyPieces[keyPieces.length-2];
        console.log(slaveName);
        // slaveStateFiles.set(slaveName,keyname);
        slaveStateFiles[slaveName]=keyname;
    });
    
    
    
    console.log(slaveStateFiles);
    
    return slaveStateFiles
}