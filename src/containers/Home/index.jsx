import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import withTable from 'components/Table/withTable'
import Table from 'components/Table'

const headers = ['Nome', 'Hospital', 'Especilidade']
const rowNames = ['name', 'hospital', 'speciality']

const Home = ({
    datasource,
    count,
    setSource,
    page,
    setPage,
    perPage,
    setPerPage,
    dataSize,
}) => {

    useEffect(() => {
        setSource({
            count: 10,
            datasource: [
                { name: 'Japa do Japão', hospital: 'Madrecor', speciality: 'Urologista' },
                { name: 'Ritiopa', hospital: 'Madrecor', speciality: 'Butecologista' },
                { name: 'Duds', hospital: 'Madrecor', speciality: 'Odontologista' },
                { name: 'Vinhal', hospital: 'Madrecor', speciality: 'Nenhuma' },
            ],
        })
    }, [])

    return (
        <div>
            <Table
                id="doctors-list"
                headers={headers}
                rowNames={rowNames}
                // customElements={() => {}}
                onEdit={() => {}}

                page={page}
                count={count}
                rows={datasource}
                dataSize={dataSize}
                rowsPerPage={perPage}
                onChangePage={setPage}
                onChangeRowsPerPage={setPerPage}
            />

        </div>
    )
}

Home.propTypes = {
    datasource: PropTypes.array,
    count: PropTypes.number,
    setSource: PropTypes.func,
    page: PropTypes.number,
    setPage: PropTypes.func,
    perPage: PropTypes.number,
    setPerPage: PropTypes.func,
    dataSize: PropTypes.number
}

export default withTable(Home)
