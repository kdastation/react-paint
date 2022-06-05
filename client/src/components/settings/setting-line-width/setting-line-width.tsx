import { ChangeEvent, FC } from "react";
import { SettingsProps } from "../../../types/settings-props";

const SettingLineWidth: FC<SettingsProps> = (props) => {
  const { tool } = props;
  const changeLineWidth = (e: ChangeEvent<HTMLInputElement>) => {
    tool.setLineWidth(Number(e.target.value));
  };
  return (
    <div>
      <input
        type="number"
        min={1}
        defaultValue={1}
        max={30}
        onChange={changeLineWidth}
      />
    </div>
  );
};

export { SettingLineWidth };
