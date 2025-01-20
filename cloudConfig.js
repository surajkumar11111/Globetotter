const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDE_NAME,  // Use environment variables
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Globetotter_DEV',
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif'],
  },
});

module.exports = { cloudinary, storage };
