const { ref, deleteObject } = require("firebase/storage");
const { firebaseStorage } = require("./config");

const DeleteFileFromFirebase= async(filepath)=>{
    try{
        if(!filepath)
        {
            return false;
        }
        const fileRef= ref(firebaseStorage, filepath);
       await deleteObject(fileRef);
       return true;
       }catch(error){
        console.log(error,' error in delete firbase');
        return false;
    }
}
module.exports=DeleteFileFromFirebase;
//const result=DeleteFileFromFirebase('https://firebasestorage.googleapis.com/v0/b/blogproject-c8786.appspot.com/o/blog-08619ab1-bc5c-4f95-bd98-829a441bc545.png?alt=media&token=2c08c86d-136b-4e92-aa77-5689e0c6c6fd');
//console.log(result,'result');