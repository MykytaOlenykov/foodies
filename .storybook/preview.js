import "../src/index.css";

/** @type { import('@storybook/react').Preview } */
import "../src/index.css";
import "../src/variables.css";
import "../src/preview.css";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
