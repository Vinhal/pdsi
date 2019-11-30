import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Text from '@material-ui/core/Typography'
import withTable from 'components/Table/withTable'
import Table from 'components/Table'

const headers = ['Nome', 'CRM', 'Hospital', 'Especilidade', 'Valor da Consulta']
const rowNames = ['name', 'crm' , 'work', 'specialty', 'consultValue']

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
                { name: 'Japa do Japão', work: 'Madrecor', specialty: 'Urologista', crm: '00000000-0', consultValue: 'R$1000,00' },
                { name: 'Ritiopa', work: 'Madrecor', specialty: 'Butecologista', crm: '00000000-0', consultValue: 'R$1000,00' },
                { name: 'Duds', work: 'Madrecor', specialty: 'Odontologista', crm: '00000000-0', consultValue: 'R$1000,00' },
                { name: 'Vinhal', work: 'Madrecor', specialty: 'Nenhuma', crm: '00000000-0', consultValue: 'R$1000,00' },
            ],
        })
    }, [])

    return (
        <div style={{ margin: '10px 50px'}}>
            <Text variant="h6">Gerenciamento de Médicos</Text>
            <Text color="textSecondary">Escolha qual médico deseja editar</Text>
            <Paper>
                <div style={{ margin: '5px 15px'}}>
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
            </Paper>
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
