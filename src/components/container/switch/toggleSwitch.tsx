interface ToggleSwitchProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  leftText: string;
  rightText: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  id,
  checked,
  onChange,
  leftText,
  rightText,
}) => {
  return (
    <div className="d-flex mb-4 align-items-center">
      <span
        style={{
          fontSize: "18px",
          color: !checked ? "#0d6dfd" : "#fff",
        }}
      >
        {leftText}
      </span>

      <div className="bsc-toggle-switch form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
      </div>

      <span
        style={{
          fontSize: "18px",
          color: checked ? "#0d6dfd" : "#fff",
        }}
      >
        {rightText}
      </span>
    </div>
  );
};

export default ToggleSwitch;
