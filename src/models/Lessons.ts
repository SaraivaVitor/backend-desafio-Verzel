import mongoose from "../database/index";

const LessonsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  module: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Modules",
    required: true,
  },
});
export default mongoose.model("Lessons", LessonsSchema);
