import { ChangeEvent, FC } from "react";
import { SettingsProps } from "../../../types/settings-props";

const SettingColor: FC<SettingsProps> = (props) => {
  const { tool } = props;
  const changeColor = (e: ChangeEvent<HTMLInputElement>) => {
    tool.setColor(e.target.value);
  };

  return (
    <div>
      <input type="color" onChange={changeColor} />
    </div>
  );
};

export { SettingColor };
