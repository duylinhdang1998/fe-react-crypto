import { ThemeConfig } from "antd";

export const theme: ThemeConfig | undefined = {
  token: {
    colorPrimary: "#0188B3",
    fontFamily: "Inter Variable, sans-serif",
  },
  components: {
    Input: {
      activeShadow: "transparent",
      paddingInline: 12,
      paddingBlock: 12,
    },
    Checkbox: {
      borderRadius: 8,
      size: 20,
    },
    Menu: {
      itemPaddingInline: 0,
      itemMarginBlock: 0,
      itemMarginInline: 0,
      itemActiveBg: "#DFF5FA",
      activeBarBorderWidth: 0,
      itemHeight: 48,
      iconSize: 24,
      itemBorderRadius: 12,
      itemHoverColor: "#007198",
      itemHoverBg: "#DFF5FA",
    },
  },
};
