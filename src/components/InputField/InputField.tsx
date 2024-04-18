import React, { ChangeEvent } from "react";
import InputError from "../InputError/InputError";
import cx from "classnames";
import { InputFieldAttr } from "../Form/@types";
import localStyles from "./InputField.module.scss";

interface InputFieldProps extends Omit<InputFieldAttr, "label" | "type"> {
  label?: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

function InputField({
  id,
  label,
  value,
  type = "text",
  required,
  onChange,
  error,
  style,
  className,
  ...rest
}: InputFieldProps) {
  return (
    <label
      data-label={id}
      htmlFor={id}
      className={cx("field", id, className)}
      style={style}
    >
      <span>
        {label}
        {required && <span className={cx("required")}>*</span>}
      </span>
      <input
        className={cx(localStyles.input)}
        type={type}
        name={id}
        value={value}
        onChange={(e) => onChange(e)}
        data-valid={!error}
        {...rest}
      />
      {error && <InputError error={error} />}
    </label>
  );
}

export default InputField;
