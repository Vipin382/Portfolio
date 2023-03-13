import {
  ActionIcon,
  useMantineTheme,
  Text,
  rem,
  Alert,
  Loader,
  Avatar,
} from "@mantine/core";
import { AiFillCode } from "react-icons/ai";
import { FaGamepad } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import React, { Suspense, useContext } from "react";
import { replaceItemAtIndex } from "@/atoms/Logic";
import { Tabs } from "@mantine/core";
import { Fira_Code } from "next/font/google";
import { useRecoilState } from "recoil";
import { Divider } from "@mantine/core";
import { CodePanel, FolderDataState } from "@/atoms/atom";
import { useFullscreen } from "@mantine/hooks";
const fira = Fira_Code({ subsets: ["latin"] });
import { IconAlertCircle } from "@tabler/icons-react";
import "allotment/dist/style.css";
import { navContext } from "@/utils/context";

const Editor = React.lazy(() => import("@/components/common/Editor"));
const AboutCard = React.lazy(() => import("@/components/AboutCard"));
const PersonalInfo = React.lazy(() => import("@/components/personalInfo"));
const requiredCode = `// Valid braces Kata – https://www.codewars.com/kata/5277c8a221e209d3f6000b56`;

const About = () => {
  const theme = useMantineTheme();
  const [active, setActive] = React.useState({
    code: true,
    profile: false,
    game: false,
  });
  const [FolderList, setFolder] = useRecoilState(FolderDataState);
  const [look, setState] = useRecoilState(CodePanel);
  const { toggle, fullscreen } = useFullscreen();
  const { newState } = useContext(navContext);

  return (
    <div className="min-h-[85.2vh] h-full flex flex-col lg:flex-row">
      <div className="flex lg:flex-col justify-around lg:justify-start lg:w-10 items-center gap-2 py-3">
        <ActionIcon
          variant="transparent"
          onClick={() => {
            setActive({
              code: !active.code,
              profile: false,
              game: false,
            });
            setState(!look);
          }}
        >
          <AiFillCode
            size={25}
            color={
              active.code ? theme.colors.indigo[1] : theme.colors.textColor[0]
            }
          />
        </ActionIcon>
        <ActionIcon
          variant="transparent"
          onClick={() => {
            newState(true);
            setActive({
              code: false,
              profile: !active.profile,
              game: false,
            });
          }}
        >
          <Avatar src="/img/avatar.png" radius={"50%"} alt="it's me" />
        </ActionIcon>
        <ActionIcon
          variant="transparent"
          onClick={() => {
            setActive({
              code: false,
              profile: false,
              game: !active.game,
            });
            toggle();
          }}
        >
          <FaGamepad
            size={25}
            color={
              active.game ? theme.colors.indigo[1] : theme.colors.textColor[0]
            }
          />
        </ActionIcon>
      </div>
      <Suspense
        fallback={
          <Loader className="flex justify-center items-center" size="sm" />
        }
      >
        <div
          className={`border min-w-[218px] border-[#607B96] border-opacity-30 ${
            look ? "block" : "hidden"
          }`}
        >
          <PersonalInfo />
        </div>
      </Suspense>
      <div className="flex flex-col xxl:flex-row">
        <div className="relative min-h-[85.2vh]">
          <nav className="border border-[#1E2D3D] h-[33.4px]">
            <Tabs
              defaultValue={"bio"}
              variant="pills"
              styles={{
                tab: {
                  border: `${rem(1)} solid #1E2D3D`,
                  borderRadius: "none",
                  color: theme.colors.textColor[0],
                  fontFamily: fira.className,
                  padding: "0px 10px",
                  "&:disabled": {
                    opacity: 0.5,
                    cursor: "not-allowed",
                  },
                  ":hover": {
                    background: "#011627",
                    border: `${rem(1)} solid #1E2D3D`,
                  },
                  "&[data-active]": {
                    border: `${rem(1)} solid #1E2D3D`,
                    color: theme.white,
                    height: "33px",
                    borderRadius: "none",
                  },
                },
                panel: {
                  border: `${rem(1)} solid #1E2D3D`,
                },
                tabLabel: {},
              }}
            >
              <Suspense
                fallback={
                  <Loader
                    className="flex justify-center items-center"
                    size={"sm"}
                  />
                }
              >
                <Tabs.List className="border-none">
                  {FolderList.map((item, index) => {
                    return item.NotesList.map((notes, ind) => {
                      return (
                        <Tabs.Tab
                          value={`${notes.fileDetails.name}`}
                          key={ind}
                          display={notes.fileDetails.active ? "flex" : "none"}
                          color={"orange"}
                        >
                          <div className="flex items-center">
                            <Text className={fira.className}>
                              {notes.fileName}
                            </Text>
                            <ActionIcon
                              variant="transparent"
                              onClick={() => {
                                const updatedObj = {
                                  name: notes.fileDetails.name,
                                  code: notes.fileDetails.code,
                                  active: false,
                                };
                                const newList = replaceItemAtIndex(
                                  FolderList,
                                  index,
                                  ind,
                                  {
                                    fileName: notes.fileName,
                                    folder: notes.folder,
                                    fileDetails: updatedObj,
                                  }
                                );
                                if (newList) {
                                  setFolder(newList);
                                }
                              }}
                            >
                              <AiOutlineClose size={10} />
                            </ActionIcon>
                          </div>
                        </Tabs.Tab>
                      );
                    });
                  })}
                </Tabs.List>
              </Suspense>

              <Suspense
                fallback={
                  <Loader
                    className="flex justify-center items-center"
                    size={"sm"}
                  />
                }
              >
                <div className="h-full overflow-y-auto xxl:min-w-[600px]">
                  {FolderList.map((item) => {
                    return item.NotesList.map((notes) => {
                      return (
                        <Tabs.Panel
                          value={`${notes.fileDetails.name}`}
                          key={notes.fileDetails.name}
                          display={notes.fileDetails.active ? "flex" : "none"}
                          className="border-none"
                        >
                          <Editor
                            codeers={`${requiredCode} ${notes.fileDetails.code}`}
                          />
                        </Tabs.Panel>
                      );
                    });
                  })}
                </div>
              </Suspense>
            </Tabs>
          </nav>
        </div>
        <Suspense
          fallback={
            <Loader className="flex justify-center items-center" size={"sm"} />
          }
        >
          <div className="w-full flex">
            <div className="w-full h-full flex flex-col justify-between">
              <AboutCard />
              <Divider my="sm" color={"#607B96"} className="m-10" />
              <div>
                <Alert
                  icon={<IconAlertCircle size="1rem" />}
                  title="Bummer!"
                  styles={{
                    message: {
                      color: "white",
                    },
                  }}
                  className="bg-red-500 bg-opacity-40 mx-10"
                  color="red"
                >
                  Something terrible happened! You made a mistake and there is
                  no going back, your data was lost forever!
                </Alert>
                <AboutCard />
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default About;
