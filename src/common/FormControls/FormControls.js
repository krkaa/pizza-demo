import React from "react";
import styles from "./FormControls.module.sass";
import {Field} from "redux-form";


const Element = Element => ({input, meta: {touched, error, valid}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " input-field " + (hasError ? styles.error : "")}>
            <Element {...input} {...props} className={hasError ? "invalid" : "valid"}/>
            {
                props.id
                    ? <label className={ valid ? "active" : ""}
                             htmlFor={props.id}>
                        {props.text}
                    </label>
                    : undefined}
            {hasError && <span> {error} </span>}
        </div>
    );
};

export const Textarea = Element("textarea");
export const Input = Element("input");


export const createField = (placeholder, type, name, component, validator, id, props = {}, text = '', value = '') => {
    return (
        <div>
            <Field placeholder={placeholder} type={type} name={name} component={component}
                   validate={validator}
                   id={id}
                   text={text}
                   value={value}
                   {...props}/>
        </div>
    );
}

