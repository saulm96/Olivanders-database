import WoodModel from "../../models/woodModels/woodHasLanguage.js"

async function getAllWoods(){
    const woods = await WoodModel.findAll()

    if(!woods) throw new Error('Woods not found');

    return woods;
}

async function getWoodById(id){
    const wood = await WoodModel.findByPk(id)

    if(!wood) throw new Error('Wood not found');

    return wood;
}

export const functions = {
    getAllWoods,
    getWoodById,
};

export default functions;