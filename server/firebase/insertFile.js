const {ref, uploadBytesResumable,getDownloadURL}= require('firebase/storage');
const { firebaseStorage } = require('./config');

const insertFileintoFirebase=async (fileName,buffer,metadata)=>{
  try{
    const storageRef= ref(firebaseStorage,fileName);
    const snapshot= await uploadBytesResumable(storageRef,buffer,metadata);
    const downloadURL= await getDownloadURL(snapshot.ref);
    return downloadURL;

  }catch(error){
    console.log('error during firebase store',error);
    throw new Error (error);
  }
}
module.exports={insertFileintoFirebase};