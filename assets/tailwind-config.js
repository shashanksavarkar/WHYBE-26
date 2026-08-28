tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-low": "#0d1c2d",
        "primary-container": "#8083ff",
        "on-secondary": "#283500",
        "outline-variant": "#464554",
        "surface-container-high": "#1c2b3c",
        "surface": "#051424",
        "surface-bright": "#2c3a4c",
        "inverse-on-surface": "#233143",
        "surface-dim": "#051424",
        "on-error-container": "#ffdad6",
        "on-primary-fixed-variant": "#2f2ebe",
        "on-secondary-fixed": "#161e00",
        "error": "#ffb4ab",
        "primary": "#c0c1ff",
        "tertiary-container": "#8990a8",
        "on-tertiary-container": "#22293d",
        "surface-tint": "#c0c1ff",
        "on-secondary-container": "#556d00",
        "background": "#051424",
        "surface-container-lowest": "#010f1f",
        "on-error": "#690005",
        "secondary-fixed-dim": "#abd600",
        "tertiary-fixed-dim": "#bec6e0",
        "error-container": "#93000a",
        "surface-variant": "#273647",
        "tertiary-fixed": "#dae2fd",
        "on-tertiary": "#283044",
        "on-primary-container": "#0d0096",
        "inverse-surface": "#d4e4fa",
        "on-primary": "#1000a9",
        "on-tertiary-fixed-variant": "#3f465c",
        "tertiary": "#bec6e0",
        "on-tertiary-fixed": "#131b2e",
        "surface-container-highest": "#273647",
        "primary-fixed-dim": "#c0c1ff",
        "secondary": "#ffffff",
        "surface-container": "#122131",
        "primary-fixed": "#e1e0ff",
        "secondary-fixed": "#c3f400",
        "on-surface-variant": "#c7c4d7",
        "on-surface": "#d4e4fa",
        "on-primary-fixed": "#07006c",
        "secondary-container": "#c3f400",
        "inverse-primary": "#494bd6",
        "outline": "#908fa0",
        "on-background": "#d4e4fa",
        "on-secondary-fixed-variant": "#3c4d00",
        "gold": "#FFD700",
        "silver": "#C0C0C0",
        "bronze": "#CD7F32"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "base-unit": "4px",
        "stack-sm": "8px",
        "margin-mobile": "16px",
        "container-max-width": "1280px",
        "stack-lg": "32px",
        "gutter": "24px",
        "margin-desktop": "48px",
        "stack-md": "16px"
      },
      maxWidth: {
        "container-max-width": "1280px"
      },
      fontFamily: {
        "label-caps": ["Inter"],
        "body-base": ["Inter"],
        "headline-md": ["Geist"],
        "display-lg": ["Geist"],
        "label-mono": ["JetBrains Mono"],
        "body-lg": ["Inter"],
        "display-lg-mobile": ["Geist"]
      },
      fontSize: {
        "label-caps": ["12px", { "lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "600" }],
        "body-base": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "headline-md": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "display-lg": ["64px", { "lineHeight": "72px", "letterSpacing": "-0.04em", "fontWeight": "800" }],
        "label-mono": ["14px", { "lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "display-lg-mobile": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "800" }]
      }
    }
  }
};
