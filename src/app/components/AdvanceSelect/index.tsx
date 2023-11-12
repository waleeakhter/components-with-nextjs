"use client"
import React from 'react'
import ReactSelect from 'react-select';
import { Control, _customStyles } from './SelectStyle'
import StateManagedSelect from "react-select"
import ValueType from "react-select"
import OptionTypeBase from "react-select"
interface MySelectProps {
    options: Array<any>;
    value?: ValueType;
    onChange?: (value: ValueType) => void;
    className?: string;
    label?: string;
}
const Select = ({ options, className, label }: MySelectProps) => {
    const _options = options ? options.map(val => ({ value: val?._id, label: val?.name })) : []
    return (
        <div className='relative'>
            <ReactSelect className={className} isClearable placeholder=""
                components={{ Control: (props) => Control(props, label ?? "Select...") }} styles={_customStyles} id='select' options={_options} />
        </div>
    )
}

export default Select