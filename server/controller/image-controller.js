
import File from "../models/file.js";



export const uploadImage = async (request,response) =>{
// return response.status(200).json({message:Hello}); can check the network tab in the console which will have image data as payload and hello message in preview.
const fileObject ={
    path:request.file.path,
    name:request.file.originalname

} 
try{
    const file= await File.create(fileObject);
    response.status(200).json({path : `http://localhost:8000/file/${file._id}`});
  }catch(error){
      console.error("Error while uploading to database", error.message);
      response.status(500).json({error: error.message});
  }
}
// We might get CORS error because we have our frontend on port 3000 and backend on port 8000.
//So, the browser may generate this error.
// Here, the request object carries the params and query property with it.
// fileId is the name of the params

export const downloadImage = async (request,response) => {
  try{
    const file= await File.findById(request.params.fileId);
    file.downloadContent++;
    await file.save(); // to save the updated downloadContent.
    response.download(file.path,file.name);
  }catch(error){
     console.error("Error occured during download", error.message);
     return response.status(500).json({error : error.message});
  }

     
} 
// here the object id will be passed as params.
// In url /... means params and ?... means query.