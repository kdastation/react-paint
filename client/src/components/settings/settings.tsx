import { FC } from "react";
import { SettingColor } from "./setting-color/setting-color";
import { SettingLineWidth } from "./setting-line-width/setting-line-width";
import ToolState from "../../mobx/tool-state";

const Settings: FC = () => {
  return (
    <div>
      <div>
        <SettingColor tool={ToolState} />
        <SettingLineWidth tool={ToolState} />
      </div>
    </div>
  );
};

export { Settings };
