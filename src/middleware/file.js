const path = require('path');

exports.filesPayloadExit = (req, res, next) => {
  if (!req.files) {
    return res.status(400).json({ status: 'error', message: 'Files missing' });
  }
  next();
};

exports.filesExtensionLimiter = (allowedFileExtension) => {
  return (req, res, next) => {
    const files = req.files;
    const filesExtension = [];
    Object.keys(files).forEach((key) => {
      filesExtension.push(path.extname(files[key].name));
    });
    const allowed = filesExtension.every((ext) => allowedFileExtension.includes(ext));
    const message = `Uploading failed: Only ${allowedFileExtension.join(', ')} files allowed`;
    if (!allowed) {
      return res.status(400).json({ status: 'error', message: message });
    }
    next();
  };
};

exports.fileSizeLimiter = (req, res, next) => {
  const MB = 1; // 1MB
  const FILE_SIZE_LIMIT = MB * 1024 * 1024;
  const files = req.files;

  const filesOverLimit = [];
  Object.keys(files).forEach((key) => {
    if (files[key].size > FILE_SIZE_LIMIT) {
      filesOverLimit.push(files[key].name);
    }
  });
  const proVerb = filesOverLimit.length > 1 ? 'are' : 'is';
  const message = `Uploading failed: ${filesOverLimit.join(', ')} ${proVerb} over the file size ${MB}MB limit.`;

  if (filesOverLimit.length) {
    return res.status(422).json({ status: 'error', message: message });
  }
  next();
};
