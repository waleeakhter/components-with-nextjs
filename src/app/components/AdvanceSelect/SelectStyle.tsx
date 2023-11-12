import { SearchOutlined } from "@ant-design/icons";
import { JSX } from "react";
import { ControlProps, DropdownIndicatorProps, GroupBase, InputProps, OptionProps, StylesConfig, components } from "react-select";
import Partial from "react-select"

export const _customStyles: StylesConfig = {

    control: (base, state) => ({
        ...base, minHeight: "50px", zIndex: 98,
        boxShadow: state.isFocused ? `0 0 0 0.2rem rgb(46 184 92 / 25%) !important` : 'none', borderRadius: '.25rem', fontSize: '14px',
        border: state.isFocused ? "1px solid #51ab1d" : "1px solid #e4e9f3",
        ':hover': {
            border: '1px solid #51ab1d',
            boxShadow: `0 0 0 0.2rem rgb(46 184 92 / 25%) !important`
        }
    }),
    option: (option, state) => ({ ...option, backgroundColor: state.isSelected ? '#51ab1d !important' : 'transparent', ":hover": { backgroundColor: '#51ab1d3b' } }),
    valueContainer: (valueContainer) => ({ ...valueContainer, flexWrap: 'nowrap', overflowX: 'auto', color: '#6e6e6e', }),
    multiValue: (multiValue) => ({ ...multiValue, flex: '1 0 auto', color: '#6e6e6e' }),
    singleValue: (value) => ({ ...value, color: '#000', fontSize: "12px" }),
    multiValueLabel: (valueLabel) => ({ ...valueLabel, color: '#000' }),
    input: (input) => ({ ...input, border: '0 !important', boxShadow: "none !important", outline: "#000" }),
    menu: (menu) => ({ ...menu, backgroundColor: "#fff", zIndex: 99 }),
}
export const Control = ({ children, ...props }: ControlProps<any, false>, label: string) => {


    return (
        <components.Control {...props} isFocused={props.isFocused}>
            <label className="pl-2 relative top-[-2.5px] w-6"><SearchOutlined /></label>
            <label
                className={`pl-2 absolute  left-6 w-6 transition-all ease-in-out duration-50
             ${props.isFocused || props.selectProps.value ? "top-[1px] text-[0.6rem]" : "top-[50%] translate-y-[-50%] "}`}>
                {label}
            </label>
            {children}
        </components.Control>
    );
};




