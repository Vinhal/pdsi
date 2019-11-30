import { matchPath } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import MedicIcon from '@material-ui/icons/Face'
import ClinicIcon from '@material-ui/icons/LocalHospital'
import LabIcon from '@material-ui/icons/LocalPharmacy'
import ExamIcon from '@material-ui/icons/InsertDriveFile'
import ConsultIcon from '@material-ui/icons/Today'

const isActive = (pathname, link) => {
    const match = matchPath(pathname, { path: link, exact: true })

    return Boolean(match)
}

const icons = {
    home: HomeIcon,
    medic: MedicIcon,
    clinic: ClinicIcon,
    lab: LabIcon,
    exam: ExamIcon,
    consult: ConsultIcon,
}

const getIcon = (icon) => icons[icon] || 'div'

export {
    isActive,
    getIcon
}
