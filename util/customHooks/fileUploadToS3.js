const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const fileUploadToS3 = async (files) => {
  try {
    const s3 = new S3Client({
      region: "ap-south-1",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
      },
    });
    Object.keys(files).forEach(async (key) => {
      let key2 = Date.now().toString() + "-" + files[key].name;
      const params = {
        Bucket: "transaction-bucket-jay",
        Key: key2,
        Body: files[key].data, 
        ContentType: files[key].mimetype,
      };
      await s3.send(new PutObjectCommand(params));
      const fileUrl = `https://transaction-bucket-jay.s3.ap-south-1.amazonaws.com/${key2}`;
      console.log("File uploaded to S3:", fileUrl);
    });
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    // throw error; // Propagate the error if needed
  }
};

module.exports = fileUploadToS3;
