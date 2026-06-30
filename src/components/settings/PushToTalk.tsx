import React from "react";
import { useTranslation } from "react-i18next";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { useSettings } from "../../hooks/useSettings";

interface PushToTalkProps {
  descriptionMode?: "inline" | "tooltip";
  grouped?: boolean;
}

export const PushToTalk: React.FC<PushToTalkProps> = React.memo(
  ({ descriptionMode = "tooltip", grouped = false }) => {
    const { t } = useTranslation();
    const { getSetting, updateSetting, isUpdating } = useSettings();

    const pushToTalkEnabled = getSetting("push_to_talk") ?? true;
    const toggleModeEnabled = !pushToTalkEnabled;

    return (
      <ToggleSwitch
        checked={toggleModeEnabled}
        onChange={(enabled) => updateSetting("push_to_talk", !enabled)}
        isUpdating={isUpdating("push_to_talk")}
        label={t("settings.general.toggleMode.label")}
        description={t(
          toggleModeEnabled
            ? "settings.general.toggleMode.enabledDescription"
            : "settings.general.toggleMode.disabledDescription",
        )}
        descriptionMode={descriptionMode}
        grouped={grouped}
      />
    );
  },
);
