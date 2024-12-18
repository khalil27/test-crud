var Hotel = require('../models/Hotel')
async function list(req,res,next) {
    await Hotel.find().then((data,err) => {
        if(err) {
        res.status(500).json(err)}
        else {
            res.status(200).json(data)
        }
    })
}

async function deleteHotel(req,res,next) {
    const id = req.params.id;
    await Hotel.findByIdAndDelete(id).then((data,err) => {
        if(err) {
            res.status(500).json(err)}
            else {
                res.status(200).json(data)
        }
    })
}

async function UpdateHotel(req,res,next) {
    await Hotel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((data,err) => {
        if(err) {
            res.status(500).json(err)}
            else {
                res.status(200).json(data)
        }
    })
}

const create =async (req,res,next) => {
    const { nom, fabricationDate } = req.body
    const { nbrRooms=10 } = req.body
    console.log(req.params);
    await new Hotel({nom,fabricationDate,nbrRooms}).save().then((data,err) => {
        if(err) {
            console.log('erreur de creation de Hotel')}
            else {
                console.log(data);
        }
    })
    res.json('Hotel added ! nom:'+ nom +' fabricationDate:'+ fabricationDate+' nbrRooms'+nbrRooms)
}

async function searchHotel(req, res, next) {
    await Hotel.find({ nbrRooms: { $gte: 10, $lte: 100 } })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}
module.exports = {create,list,deleteHotel,UpdateHotel,searchHotel}