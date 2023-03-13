import { FaReact, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BsFiletypeScss, BsGit, BsGithub } from "react-icons/bs";
import { TbBrandNextjs, TbBrandCpp } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiPostgresql, SiFlutter } from "react-icons/si";
import { SiMysql, SiMongodb, SiMui, SiPrisma } from "react-icons/si";
import { SiNestjs, SiSolidity, SiChakraui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { AiFillHtml5, AiFillGithub, AiFillPieChart } from "react-icons/ai";
import { FaHardHat, FaJava } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { Text, Box, useMantineTheme } from "@mantine/core";
import { Accordion } from "@mantine/core";
import { MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import { IconType } from "react-icons/lib";
import { Fira_Code } from "next/font/google";
const fira = Fira_Code({ subsets: ["latin"] });

interface TechnologiesInterface {
  text: string;
  color: string;
  folderColor: string;
  folderType?: IconType;
}

interface TechTabInterface {
  name: string;
  icon: IconType;
}

const TechData: TechTabInterface[] = [
  {
    name: "ReactJs",
    icon: FaReact,
  },
  {
    name: "NextJs",
    icon: TbBrandNextjs,
  },
  {
    name: "HTML",
    icon: AiFillHtml5,
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
  },
  {
    name: "Redux",
    icon: SiRedux,
  },
  {
    name: "Git",
    icon: BsGithub,
  },
  {
    name: "Scss",
    icon: BsFiletypeScss,
  },
  {
    name: "GitHub",
    icon: AiFillGithub,
  },
  {
    name: "NestJs",
    icon: SiNestjs,
  },
  {
    name: "GraphQl",
    icon: GrGraphQl,
  },
  {
    name: "ChartJs",
    icon: AiFillPieChart,
  },
  {
    name: "PostgresSQL",
    icon: SiPostgresql,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "SQL",
    icon: SiMysql,
  },
  {
    name: "C++",
    icon: TbBrandCpp,
  },
  {
    name: "Solidity",
    icon: SiSolidity,
  },
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "HardHat",
    icon: FaHardHat,
  },
  {
    name: "Mui",
    icon: SiMui,
  },
  {
    name: "Prisma",
    icon: SiPrisma,
  },
  {
    name: "Chakra",
    icon: SiChakraui,
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Ai",
    icon: GiArtificialIntelligence,
  },
  {
    name: "Flutter",
    icon: SiFlutter,
  },
];

interface ITechWrapper {
  color: string;
  title: string;
}
export const BoxWrapper: React.FC<TechnologiesInterface> = ({
  text,
  color,
  folderColor,
  folderType,
}) => {
  return (
    <Box className={"flex gap-2 px-6 mt-1"}>
      {folderType
        ? React.createElement(folderType, { color: folderColor, size: "15px" })
        : ""}

      <Text color={color} size={"xs"} className={`${fira.className}`}>
        {text}
      </Text>
    </Box>
  );
};

const Sidebar = () => {
  const theme = useMantineTheme();
  return (
    <aside className="relative h-full bg-[#011627] overflow-y-auto min-w-[256px]">
      <Accordion
        defaultValue="Technology"
        chevronPosition="left"
        variant={"filled"}
        chevron={<MdKeyboardArrowRight />}
        styles={(theme) => ({
          item: {
            background: "#011627",
            "&[data-active]": {
              background: "#011627",
              color: "white",
            },
          },
          chevron: {
            color: theme.colors.textColor[0],
            "&[data-rotate]": {
              transform: "rotate(90deg)",
            },
          },
          label: {
            color: theme.colors.textColor[0],
          },
        })}
      >
        <Accordion.Item value="Technology">
          <Accordion.Control>Technology</Accordion.Control>
          <Accordion.Panel>
            {TechData.map((item, index) => {
              return (
                <BoxWrapper
                  key={index}
                  text={`${item.name}`}
                  color={theme.colors.textColor[0]}
                  folderColor={theme.colors.textColor[0]}
                  folderType={item.icon}
                />
              );
            })}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </aside>
  );
};

export default Sidebar;
