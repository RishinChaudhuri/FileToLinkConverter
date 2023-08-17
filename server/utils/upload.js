import multer from 'multer';
// Why we are using middleware becausebthe request that came on to uploadImage did not have the file property so that it can be uploaded to the database ||
// checked through console where we found other properties like route,base url, frontend eader files,etc.

const upload=multer({dest : 'uploads'});

export default upload;