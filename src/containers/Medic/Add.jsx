import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import { useParams } from "react-router-dom"
import Grid from '@material-ui/core/Grid'
import Text from '@material-ui/core/Typography'
import Button from 'components/Button'
import Input from 'components/Input'
import { ButtonContainer } from './style'

const initialValues = {
    name: '',
    cpf: '',
    specialty: '',
    crm: '',
    work: '',
    consultValue: '',
    address: '',
}

const UpdateMedic = ({ history }) => {
    const [medicToEdit, setMedicToEdit] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        console.log('HEEEEEEEEEEEEEEE')
        setMedicToEdit(null)
    }, [id])

    const handleSave = values => {
        console.log('SUBMITTED')
    }

    return (
        <div style={{ margin: '10px 50px' }}>
            <Text variant="h6">Cadastro de Médico</Text>
            <Text color="textSecondary" style={{ marginBottom: '10px' }}>
                Informe os dados do médico que deseja inserir
            </Text>

            <Formik
                initialValues={initialValues}
                onSubmit={handleSave}
                render={({ values, setFieldValue }) => (
                    <Form>
                        <Grid item xs={12} md={8} lg={6}>
                            <Input
                                name="name"
                                label="Nome"
                                value={values.name}
                                onChange={(data) => setFieldValue('name', data)}
                            />
                            <Input
                                name="cpf"
                                label="CPF"
                                value={values.cpf}
                                onChange={(data) => setFieldValue('cpf', data)}
                            />
                            <Input
                                name="specialty"
                                label="Especialidade"
                                value={values.specialty}
                                onChange={(data) => setFieldValue('specialty', data)}
                            />
                            <Input
                                name="crm"
                                label="CRM"
                                value={values.crm}
                                onChange={(data) => setFieldValue('crm', data)}
                            />
                            <Input
                                name="work"
                                label="Instituição (Hospital/Clínica)"
                                value={values.work}
                                onChange={(data) => setFieldValue('work', data)}
                            />
                            <Input
                                name="consultValue"
                                label="Valor da Consult ($)"
                                value={values.consultValue}
                                onChange={(data) => setFieldValue('consultValue', data)}
                            />
                            <Input
                                name="address"
                                label="Endereço"
                                value={values.address}
                                onChange={(data) => setFieldValue('address', data)}
                            />
                        </Grid>
                        <ButtonContainer>
                            <Button
                                variant="outlined"
                                label="Cancelar"
                                color="inherit"
                                style={{ marginRight: '10px' }}
                                onClick={() => history.goBack()}
                            />
                            <Button
                                type="submit"
                                label="Cadastrar"
                                onClick={() => history.push('/medics/add')}
                            />
                        </ButtonContainer>
                    </Form>
                )}
            />
        </div>
    )
}

UpdateMedic.propTypes = {
    history: PropTypes.any,
}

export default UpdateMedic
