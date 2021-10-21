const Pet = require('../models/pet')
exports.petPost = (req, res, next) => {   
    Pet.findOne({nome: req.body.nome}).exec().then((pet) => {
        if(pet) res.status(200).json({message: "Pet já cadastrado!"})
        else{
            const pet = new Pet({
                nome: req.body.nome,
                porte: req.body.porte,
                horario: req.body.horario
            })

            pet.save().then((pet) => {
                res.status(200).json({message: "Pet cadastrado com sucesso!", pet: pet})
            }).catch((err) => {
                res.status(500).json({erro: `Ocorreu um erro: ${err}`})
            })
        }
    })
}

exports.petGet = (req, res, next) => {

    Pet.findOne({nome: req.params.nome}).exec().then((pet) => {
        if(pet){
            if(pet.nome === req.params.nome){
                res.status(200).json({message: "Pet já cadastrado!", valid: false})
            }else{
                res.status(200).json({message: "Ok!", valid: true})
            }
        }
        
        res.status(200).json({message: "Ok!", valid: true})
        
    })
}