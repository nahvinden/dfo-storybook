import React from "react";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import { TypographyPage, FormPage, ColorsPage } from "./pages";

storiesOf("Welcome", module)
  .add("to Storybook", () => <Welcome showApp={linkTo("Button")} />);

storiesOf("Pages", module)
  .add("Overview", () => <TypographyPage />)
  .add("Colors: dfo.no", () => <ColorsPage />)
  .addWithStaticMarkup("Complete form", () => <FormPage />)