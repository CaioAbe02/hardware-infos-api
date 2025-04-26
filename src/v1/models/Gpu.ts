import mongoose from "mongoose"

const { Schema } = mongoose

const schema = new Schema({
  model: { type: String, required: true },
  brand: { type: String, required: true },
  serie: { type: String, required: true },
  release_date:  { type:  Date, required: true },
  manufacturing_process: { type: String, required: true },
  memory_size: { type: String, required: true },
  memory_type: { type: String, required: true },
  base_clock: { type: String, required: true },
  boost_clock: { type: String, required: true },
  shading_units: { type: Number, required: true, min: 0 },
  rt_cores: { type: Number, required: true, min: 0 },
  tensor_cores: { type: Number, required: true, min: 0 },
  bus_interface: { type: String, required: true },
  tdp: { type: String, required: true },
  suggested_psu: { type: String, required: true },
})
const Gpu = mongoose.model('Gpu', schema)

export default Gpu