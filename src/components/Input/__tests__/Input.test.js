import React from 'react'
import { shallow, mount } from 'enzyme'
import Input from '..'

test('Should match Input snapshot', () => {
    const component = shallow(<Input />)

    expect(component).toMatchSnapshot()
})

test('Should change Input value', () => {
    const value = 'valueMock'
    const onChange = jest.fn()

    const wrapper = mount(<Input value='' onChange={onChange} />)

    wrapper.find('input').simulate('change', { target: { value: value }})

    expect(onChange).toHaveBeenCalled()
})

test('Should test Input name', () => {
    const expectedName = 'NAME'

    const wrapper = mount(<Input name={expectedName} />)

    const name = wrapper.props().name

    expect(expectedName).toBe(name)
})
