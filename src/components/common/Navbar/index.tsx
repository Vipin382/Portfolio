import React, { useContext, useEffect } from "react";
import { Flex, rem, Tabs, Text, useMantineTheme } from "@mantine/core";
import { Fira_Code } from "next/font/google";
import { useRouter } from "next/router";
import { Demo } from "@/components/ProjectModel";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const fira = Fira_Code({ subsets: ["latin"] });

const Navbar = () => {
  const theme = useMantineTheme();
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Flex
      mih={56}
      className="border border-[#1E2D3D] flex flex-col nm:flex-row"
    >
      <div className="flex justify-between w-full nm:w-auto h-[56px]">
        <Text
          fz="md"
          className={`flex justify-center items-center ${fira.className} px-4 nm:px-0 nm:w-[250px]`}
          color={theme.colors.textColor[0]}
        >
          vipin-bhati
        </Text>
        <div className="flex justify-center items-center mr-4 relative w-9">
          <Burger
            opened={opened}
            onClick={toggle}
            color={"#1E2D3D"}
            className="nm:hidden visible absolute z-20 left-0 "
          />
        </div>
      </div>
      <Tabs
        radius="xs"
        defaultValue="hello"
        className={`w-full ${
          opened
            ? "h-[92vh] opacity-100 visible"
            : "h-[0px] opacity-0 invisible"
        } nm:opacity-100 nm:flex nm:visible transition-all duration-700 nm:h-auto`}
        value={router.query.activeTab as string}
        onTabChange={(value) => {
          value === "hello" ? router.push(`/`) : router.push(`/${value}`);
        }}
        styles={(theme) => ({
          tab: {
            ...theme.fn.focusStyles(),
            fontFamily: fira.className,
            borderLeft: `${rem(1)} solid #1E2D3D`,
            borderBottom: `${rem(1)} solid #1E2D3D`,
            "&[data-active]": {
              background: "#011627",
              color: theme.colors.textColor[0],
              border: `${rem(1)} solid #1E2D3D`,
              ":hover": {
                border: `${rem(1)} solid #1E2D3D`,
              },
            },
            color: theme.colors.textColor[0],
            ":hover": {
              background: "#011627",
              border: `${rem(1)} solid #1E2D3D`,
            },
          },
        })}
      >
        <Tabs.List className="w-full border-none">
          <div className="flex w-full flex-col nm:flex-row nm:justify-between">
            <div className="flex nm:flex-row flex-col">
              <Tabs.Tab value="hello" h={56} className={fira.className}>
                _hello
              </Tabs.Tab>
              <Tabs.Tab
                value="about"
                h={56}
                color={"green"}
                className={fira.className}
              >
                _about-me
              </Tabs.Tab>
              <Tabs.Tab value="projects" h={56} className={fira.className}>
                _projects
              </Tabs.Tab>
              <Tabs.Tab
                onClick={() => {
                  window.location.href = "/VipinResume.pdf";
                }}
                value="projects"
                h={56}
                className={fira.className}
              >
                _Resume
              </Tabs.Tab>
            </div>

            <div className="flex flex-col nm:flex-row">
              <Tabs.Tab value="contact" h={56} className={fira.className}>
                _contact-me
              </Tabs.Tab>
              <Tabs.Tab value="projects" h={56}>
                <Demo />
              </Tabs.Tab>
            </div>
          </div>
        </Tabs.List>
      </Tabs>
    </Flex>
  );
};

export default Navbar;
