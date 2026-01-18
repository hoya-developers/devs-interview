import classNames from "classnames";
import { useRef } from "react";
import { InputCheckboxComponent } from "./types";

export const InputCheckbox: InputCheckboxComponent = ({
  id,
  checked = false,
  disabled,
  onChange,
}) => {
  const { current: inputId } = useRef(`DevsInputCheckbox-${id}`);

  return (
    <div className="DevsInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("DevsInputCheckbox--label", {
          "DevsInputCheckbox--label-checked": checked,
          "DevsInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="DevsInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
    </div>
  );
};
