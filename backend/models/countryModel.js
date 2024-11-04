import mongoose from "mongoose";

const countrySchema = mongoose.Schema(
    {
        CountryName: {
            type: String,
            required: true,
        },
        CountryId:{
            type: String,
            required: true,
        },

        GDP:{
            type: Number,
            required: true,
        }
    }
);

export const Country = mongoose.model('Country', countrySchema);