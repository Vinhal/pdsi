import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Text from '@material-ui/core/Typography'
import withTable from 'components/Table/withTable'
import Table from 'components/Table'
import Button from 'components/Button'

const headers = ['Nome', 'CRM', 'Hospital', 'Especilidade', 'Valor da Consulta']
const rowNames = ['name', 'crm' , 'work', 'specialty', 'consultValue']

const Home = ({
    history,
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
                { id: 2, name: 'Ritiopa', work: 'SUS', specialty: 'Butecologista', crm: '00000000-0', consultValue: 'R$ 10,00' },
                { id: 3, name: 'Dudis', work: 'Madrecor', specialty: 'Odontologista', crm: '00000000-0', consultValue: 'R$ 1000,00' },
                { id: 1, name: 'Japa do Japão', work: 'PetShop', specialty: 'Urologista', crm: '00000000-0', consultValue: 'R$ 1000,00' },
                { id: 4, name: 'Vinal', work: 'Madrecor', specialty: 'Nenhuma', crm: '00000000-0', consultValue: 'R$ 1000,00' },
                { id: 4, name: 'Mataus', work: 'SUS', specialty: 'Ginecologista', crm: '00000000-0', consultValue: 'R$ 1000,00' },
                { id: 4, name: 'Louis', work: 'Madrecor', specialty: 'Nutricionista', crm: '00000000-0', consultValue: 'R$ 1000,00' },
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
                        onEdit={(row) => history.push(`/medics/${row.id}/edit`)}

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
            <Button
                label="Cadastrar Médico"
                style={{ float: 'right', marginTop: '20px' }}
                onClick={() => history.push('/medics/add')}
            />
        </div>
    )
}

Home.propTypes = {
    history: PropTypes.any,
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
