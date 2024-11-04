import express from 'express';
import {Country} from '../models/countryModel.js';
const router = express.Router();


//Route for creating a new country 
router.post('/', async (request, response) => {
    try {
        if(
            !request.body.CountryName ||
            !request.body.CountryId ||
            !request.body.GDP
        ){
            return response.status(400).send({
                message: 'Send all required fields: CountryName,CountryId,GDP',
            });
        }
    
    const newCountry = {
        CountryName: request.body.CountryName,
        CountryId: request.body.CountryId,
        GDP: request.body.GDP,
    };

    const country = await Country.create(newCountry);
    return response.status(201).send(country);

    } catch (error){
    console.log(error.message);
    response.status(500).send({ message: error.message});
    }
});

// Routte for Get All Countries from database
router.get('/', async (request, response) => {
    try{
      const countries = await Country.find({});
      return response.status(200).json({
        count: countries.length,
        data: countries
      });
    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Routte for Get one book from database by id 
router.get('/:id', async (request, response) => {
    try{

      const {id} = request.params;

      const country = await Country.findById(id);
      return response.status(200).json(country);

    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route for Update a Country
router.put('/:id', async (request, response) => {
    try{
        if(
            !request.body.CountryName ||
            !request.body.CountryId ||
            !request.body.GDP
        ){
            return response.status(400).send({
                message: 'Send all required fields: CountryName,CountryID,GDP',
            });
        } 

        const {id } = request.params;
        const result = await Country.findByIdAndUpdate(id, request.body, {new:true});

    if(!result){
        return response.status(404).json({message: 'Country not found'});
    }

    return response.status(200).send({message: 'Country updated succesfully'});
    }catch(error){
       console.log(error.message); 
       response.status(500).send({message: error.message});
    }
});

//Route for Delete a country
router.delete('/:id', async (request, response) => {
    try{
    const {id } = request.params;

    const result = await Country.findByIdAndDelete(id);

    if(!result){
        return response.status(404).json({message: 'Country not found'});
    }

    return response.status(200).send({message: 'Country deleted successfully'});

    }catch(error){
    console.log(error.message);
    response.status(500).send({message: error.message});
    }
});

export default router;