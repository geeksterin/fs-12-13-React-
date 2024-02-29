const JobModel = require("../models/job");

const createJob = async (req, res) => {
  try {
    console.log(req.body);
    // TODO: Insert data into db for new job db.jobs.insertOne({});
    const newJob = new JobModel(req.body);
    const newlyInsertedJob = await newJob.save();

    res.json({
      success: true,
      message: "Job created successfully " + newlyInsertedJob._id,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const getJob = async (req, res) => {
  const jobsList = await JobModel.find({});
  res.json({
    success: true,
    message: "Dummy job get API",
    results: jobsList,
  });
};

const editJob = async (req, res) => {
  // console.log(req.body);
  await JobModel.updateOne({ _id: req.body._id }, { $set: req.body });
  // JobModel.findByIdAndUpdate(req.body._id, req.body);
  // await JobModel.updateMany({ title: req.body.title }, { $set: req.body });
  res.json({
    success: true,
    message: "Job edited successfully",
  });
};

const deleteJob = async (req, res) => {
  try {
    // await JobModel.findByIdAndDelete(req.body._id);
    JobModel.deleteOne({_id: req.body._id})
    res.json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again after some time",
    });
  }
};

module.exports = {
  createJob,
  getJob,
  editJob,
  deleteJob,
};
