const cloudinary = require('cloudinary').v2;
const { CloudinaryStroage, CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({ 
    cloud_name: 'dgrtbv0gq', 
    api_key: '829793862234792', 
    api_secret: '7WbZ4qI6XXqBhZuxUjIvSuA4USI' 
  });

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
    folder: 'coneaholic',
    allowedFormats: ['jpeg', 'png', 'jpg']
}
});

module.exports = {
    cloudinary,
    storage
}