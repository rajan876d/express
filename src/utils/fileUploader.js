import { v2 as cloudinary } from "cloudinary";


const uploadSingleFile = (file) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "newfolder",
        alllowed_formats:["lpg", "png", "mp4", "webp"],
       },
      (error, data) => {
        if (error) return reject(error);
        return resolve(data);
      }
    );
    stream.end(file.buffer); // use THIS file's buffer, not files[0]
  });
};


const uploadFiles = async (files) => {
  if (!files || files.length === 0) {
    return [];
  }

  const uploadPromises = files.map((file) => uploadSingleFile(file));
  const results = await Promise.all(uploadPromises);
  return results;
};

export default uploadFiles;