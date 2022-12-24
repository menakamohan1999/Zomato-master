import express from "express";

import {ReviewModel} from "../../database/allModels";

const Router = express.Router();



Router.post("/new", async(req,res)=> {
  try {
    const { reviewData } = req.body;

    await ReviewModel.create(reviewData);

    return res.json({review: "Successfully Created Review"});
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});



Router.delete("/delete/:_id", async(req,res)=> {
  try {
    const { _id } = req.params;

    await ReviewModel.findByIdAndDelete(_id);

    return res.json({review: "Successfully Deleted Review"});
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});

export default Router;
