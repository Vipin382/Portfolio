import React from "react";
import {
  Text,
  ActionIcon,
  Flex,
  Stack,
  useMantineTheme,
  Container,
  rem,
} from "@mantine/core";
import { Fira_Code } from "next/font/google";
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandGithub,
} from "@tabler/icons-react";

const fira = Fira_Code({ subsets: ["latin"] });

const Footer = () => {
  const theme = useMantineTheme();
  return (
    <div
      className={`border border-[#1E2D3D] h-14 ${fira.className} flex justify-between`}
    >
      <div className="flex">
        <div
          className="flex justify-center items-center px-2 nm:px-0 nm:w-40"
          style={{ borderRight: `${rem(1)} solid #1E2D3D` }}
        >
          <Text
            className={`${fira.className}`}
            style={{
              color: theme.colors.textColor[0],
            }}
          >
            Find me in:{" "}
          </Text>
        </div>
        <div
          style={{ borderRight: `${rem(1)} solid #1E2D3D` }}
          className="flex items-center justify-center w-16"
        >
          <ActionIcon
            variant="transparent"
            component="a"
            href="https://www.linkedin.com/in/vipin-bhati-6a18781b7/"
          >
            <IconBrandLinkedin
              size="2rem"
              stroke={"0.8"}
              style={{ color: theme.colors.textColor[0] }}
            />
          </ActionIcon>
        </div>
        <div
          style={{ borderRight: `${rem(1)} solid #1E2D3D` }}
          className="flex items-center justify-center w-16"
        >
          <ActionIcon
            variant="transparent"
            component="a"
            href="https://www.instagram.com/vipin.bhati2020/"
          >
            <IconBrandInstagram
              size="3rem"
              stroke={"0.8"}
              style={{ color: theme.colors.textColor[0] }}
            />
          </ActionIcon>
        </div>
      </div>
      <div className="flex">
        <div
          className="flex justify-center items-center px-2 nm:px-0 nm:w-32"
          style={{ borderLeft: `${rem(1)} solid #1E2D3D` }}
        >
          <Text
            className={fira.className}
            style={{
              color: theme.colors.textColor[0],
            }}
          >
            @Vip382
          </Text>
        </div>
        <div
          className="flex justify-center items-center w-16"
          style={{ borderLeft: `${rem(1)} solid #1E2D3D` }}
        >
          <ActionIcon
            variant="transparent"
            component="a"
            href="https://github.com/Vipin382"
          >
            <IconBrandGithub
              size="3rem"
              stroke={"0.8"}
              style={{
                color: theme.colors.textColor[0],
              }}
            />
          </ActionIcon>
        </div>
      </div>
    </div>
  );
};

export default Footer;
