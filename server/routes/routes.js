import express from "express";
import {uploadImage,downloadImage} from "../controller/image-controller.js";
import upload from "../utils/upload.js";

const router=express.Router();

router.post('/upload' ,upload.single('file'), uploadImage);
// single function because we want to upload a single file.
// now we get a file field in the request of uploadImage with a file property which itself is an object.
// We didnt use a call back function here beacuse we are following MVC(Modular View Controller) structure.
// We can also add a middleware after the route here.
router.get('/file/:fileId', downloadImage)
 export default router;
