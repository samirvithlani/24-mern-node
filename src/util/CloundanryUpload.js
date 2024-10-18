const cloudanry = require('cloudinary').v2;

const uploadFileToCloudanry = async (file) => {


    cloudanry.config({
        cloud_name: '',
        api_key: '',
        api_secret: ''
    })
    const res = await cloudanry.uploader.upload(file)
    return res;

}
module.exports = {
    uploadFileToCloudanry
}