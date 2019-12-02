import Api from './api/api';

const path = '/doctor'

const DoctorApi = {
  getAllDoctors: () => (
    Api.get(`${path}/`)
  ),
  registerDoctor: (doctor) => (
    Api.post(`${path}/login`, { doctor })
  )
}

export default DoctorApi;

