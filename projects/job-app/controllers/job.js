const JobModel = require("../models/job");

const createJob = async (req, res) => {
  try {
    console.log(req.body);
    // TODO: Insert data into db for new job db.jobs.insertOne({});
    const newJob = new JobModel(req.body);
    const newlyInsertedJob = await newJob.save();

    res.json({
      success: true,
      message: "Job created successfully " + newlyInsertedJob,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const getJob = (req, res) => {
  res.json({
    success: true,
    message: "Dummy job get API",
  });
};

module.exports = {
  createJob,
  getJob,
};
