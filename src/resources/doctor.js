import Api from './api/api';

const path = '/api/doctor'

const DoctorApi = {
    getAllDoctors: () => (
        Api.get(`${path}/`)
    ),
    registerDoctor: (doctor) => (
        Api.post(`${path}/login`, { doctor })
    )
}

export default DoctorApi;

