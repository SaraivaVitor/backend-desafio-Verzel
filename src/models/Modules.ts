import mongoose from "../database/index";

const ModuleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  totalQuanity: {
    type: String,
    required: true,
  },
  lessons: [
    {
      type: String,
    },
  ],
});

export default mongoose.model("Modules", ModuleSchema);
