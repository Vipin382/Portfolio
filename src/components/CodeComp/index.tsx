import { useMantineTheme } from "@mantine/core";
import { Prism } from "@mantine/prism";
import React from "react";
import { Fira_Code } from "next/font/google";
const fira = Fira_Code({ subsets: ["latin"] });

type Props = {
  code: string;
};

const CodeComp = (props: Props) => {
  const theme = useMantineTheme();
  return (
    <Prism
      noCopy
      language="tsx"
      withLineNumbers
      styles={{
        lineContent: {
          fontSize: "10px",
          letterSpacing: "2px",
          fontFamily: fira.className,
        },
      }}
      colorScheme="dark"
      radius={"lg"}
      className={`border rounded-lg border-green-200 border-opacity-10`}
    >
      {props.code}
    </Prism>
  );
};

export default CodeComp;
