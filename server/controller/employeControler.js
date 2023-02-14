const Employe = require('../model/employeModel')
const {uploadToCloudinary} = require('../config/cloudinaryConfig')
const { json } = require('body-parser')
const { url } = require('inspector')


const getEmployeDetails = async(req,res) =>{
    try {
        const employe = await Employe.find()
        if(!employe){
            return res.status(400),json({msg:"No data found"})
        }else{
            res.json(employe)
        }
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const addEmploye = async(req,res) =>{
    const data = req.body;
    
    try {
        const image = data.image.fileList
        const imageUrl = [];
        const user = await Employe.findOne({idNumber:data.id})
        if(user){
            res.status(400).json({error:"Employe is already added"})
        }
        else{

        image.forEach(async(image, index, array) => {
            try {
                const datas = await uploadToCloudinary(image.thumbUrl, "Service-images");
                imageUrl.push(datas.url);
            } catch (err) {
                console.log(err);
            }
            const employe = new Employe({
                name:data.name,
                idNumber:data.id,
                email:data.email,
                department:data.department,
                address:data.address,
                image:imageUrl
            })
            employe.save()
            res.status(200).json({msg:"successfully added"})
        })
}

    } catch (error) {
        return res.status(500).json({msg: error.message});
    }

}


module.exports = {
    getEmployeDetails,
    addEmploye
}
