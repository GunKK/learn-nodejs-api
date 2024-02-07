const multer = require('multer');
const fs = require('fs');
const upload = (folderName) => {
    return (imageUpload = multer({
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                const path = `src/public/uploads/${folderName}/`;
                fs.mkdirSync(path, { recursive: true });
                cb(null, path);
            },

            // By default, multer removes file extensions so let's add them back
            filename: (req, file, cb) => {
                cb(null, `${Date.now()}-${file.originalname}`);
            },
        }),
        limits: { fileSize: 10000000 },
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|JPG|webp|jpeg|JPEG|png|PNG|gif|GIF|jfif|JFIF)$/)) {
                req.fileValidationError = 'Only image files are allowed example jpg, jpeg,...!';
                return cb(null, false);
            }
            cb(null, true);
        },
    }));
};

module.exports = {
    upload
}
