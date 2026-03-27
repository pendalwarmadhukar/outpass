const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    adminName: { type: String, required: true, trim: true },
    adminId: { type: String, required: true, trim: true, unique: true },
    email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid college email!`
    }
  },
    phone: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    department: { type: String, required: true, trim: true },
    role: { type: String, default: "admin" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", adminSchema);
