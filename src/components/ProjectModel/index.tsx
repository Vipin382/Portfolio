import { ProjectCardInterface, ProjectCardState } from "@/atoms/atom";
import React, { useState } from "react";
import { Divider, Stepper, Textarea, useMantineTheme } from "@mantine/core";
import { TextInput, Button, Group, Modal } from "@mantine/core";
import { Fira_Code } from "next/font/google";
import { Text } from "@mantine/core";
import toast, { Toaster } from "react-hot-toast";
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from "@mantine/dropzone";
import { ActionIcon } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import "react-reflex/styles.css";
import { useRecoilState } from "recoil";
import { useDisclosure } from "@mantine/hooks";
import {
  CreateProject,
  FetchData,
  UploadImage,
  ValidateOwner,
} from "@/utils/Fetcher";

const fira = Fira_Code({ subsets: ["latin"] });

interface NotificationI {
  message: string;
  type: string;
}

export const ShowNotification = ({ type, message }: NotificationI) => {
  type === "success"
    ? toast.success(message, {
        duration: 2000,
      })
    : type === "loading"
    ? toast.loading(message, {
        duration: 2000,
      })
    : toast.error(message, {
        duration: 2000,
      });
};

export function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = React.useState(0);
  const [validationEmail, setValidationEmail] = React.useState("");
  const [files, setFiles] = React.useState<FileWithPath[]>([]);
  const [gitLinkDate, SetgitLink] = useState("");
  const [LiveLinkDate, SetLiveLink] = useState("");
  const [ProjectNameData, SetProjectName] = useState("");
  const [aboutDate, Setabout] = useState("");
  const [projects, setProjects] = useRecoilState(ProjectCardState);
  const theme = useMantineTheme();

  const HandelEmailVerification = async () => {
    if (validationEmail) {
      const res = await ValidateOwner({ email: validationEmail });
      if (res.status === 200) {
        ShowNotification({ type: "success", message: res.message as string });
        setValidationEmail("");
        setActive(1);
      } else {
        ShowNotification({ type: "error", message: res.message as string });
        setTimeout(() => close(), 1000);
      }
    } else {
      ShowNotification({ type: "error", message: "Please Enter Email" });
    }
  };

  const HandleSubmit = async () => {
    if (
      ProjectNameData &&
      gitLinkDate &&
      LiveLinkDate &&
      files[0] &&
      aboutDate
    ) {
      const imgData = await UploadImage({
        img: files[0],
        imgName: files[0].name,
      });
      const NewProject: ProjectCardInterface = {
        ProjectName: ProjectNameData,
        gitLink: gitLinkDate,
        LiveLink: LiveLinkDate,
        ImgLink: imgData.urlPath as string,
        about: aboutDate,
      };
      const data = await CreateProject(NewProject);
      if (data.status === 200) {
        ShowNotification({ type: "success", message: data.message as string });
        const ProjectData = await FetchData();

        setProjects(ProjectData.newData as ProjectCardInterface[]);
        setActive(0);
      } else {
        ShowNotification({ type: "error", message: data.message as string });
        setTimeout(() => close(), 1000);
        setActive(0);
      }
    } else {
      setActive(0);
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => {
          close();
          setActive(0);
        }}
        title="Authentication"
        styles={(theme) => ({
          root: {
            background: "#011627",
          },
          header: {
            background: "#011627",
            border: "1px solid #607B96",
            color: "#607B96",
            letterSpacing: "1px",
            fontWeight: "bolder",
            fontFamily: fira.className,
          },
          body: {
            background: "#011627",
            border: "1px solid #607B96",
            color: "#607B96",
          },
        })}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <Stepper
          active={active}
          breakpoint="sm"
          className="bg-[#011627] text-white my-5"
          color={"#074375fb"}
          styles={(_theme) => ({
            separator: {
              color: "red",
              background: "Red",
            },
            stepIcon: {},
            step: {
              color: "#011627",
            },

            stepBody: {
              color: "#607B96",
              fontFamily: fira.className,
            },
            steps: {},
            stepLabel: {
              color: "#607B96",
              fontFamily: fira.className,
            },
            stepDescription: {
              color: "#607B96",
              fontFamily: fira.className,
            },
          })}
        >
          <Stepper.Step label="Verification">
            <Group className="flex flex-col">
              <Text
                className={` w-full text-[#607B96] font-medium ${fira.className}`}
              >
                ADMIN
              </Text>
              <Divider size={"xs"} color={"gray"} orientation="horizontal" />
              <TextInput
                type={"text"}
                label="_email"
                placeholder="Enter Email"
                value={validationEmail}
                className="w-full"
                onChange={(e) => {
                  setValidationEmail(e.currentTarget.value);
                }}
                styles={(_theme) => ({
                  input: {
                    background: "#011627",
                    border: "1px solid #607B96",
                    color: "#607B96",
                    letterSpacing: "2px",
                    fontFamily: fira.className,
                  },
                  label: {
                    fontStyle: fira.className,
                    fontFamily: fira.className,
                    color: "#607B96",
                    letterSpacing: "2px",
                  },
                })}
              />
              <Button
                fullWidth
                onClick={() => {
                  HandelEmailVerification();
                }}
              >
                Verify Email
              </Button>
            </Group>
          </Stepper.Step>
          <Stepper.Step label="Update">
            <Group>
              <TextInput
                type={"text"}
                label="_Project_Name"
                placeholder="Enter Project Name"
                value={ProjectNameData}
                className="w-full"
                onChange={(e) => {
                  SetProjectName(e.currentTarget.value);
                }}
                styles={(_theme) => ({
                  input: {
                    background: "#011627",
                    border: "1px solid #607B96",
                    color: "#607B96",
                    letterSpacing: "2px",
                    fontFamily: fira.className,
                  },
                  label: {
                    fontStyle: fira.className,
                    fontFamily: fira.className,
                    color: "#607B96",
                    letterSpacing: "2px",
                  },
                })}
              />
              <div className=" w-full">
                <Dropzone
                  accept={IMAGE_MIME_TYPE}
                  onDrop={setFiles}
                  bg={"#011627"}
                  sx={(theme) => ({
                    border: "1px solid #607B96",
                    backgroundColor: "#011627",
                    ":hover": {
                      backgroundColor: "#011627",
                    },
                    "&[data-accept]": {
                      color: "#607B96",
                      backgroundColor: "#011627",
                    },

                    "&[data-reject]": {
                      color: "#607B96",
                      backgroundColor: theme.colors.red[6],
                    },
                  })}
                >
                  <Text
                    align="center"
                    className={`${fira.className} text-[#607B96]`}
                  >
                    Drop images here
                  </Text>
                </Dropzone>
              </div>
              <TextInput
                type={"text"}
                label="_Git"
                placeholder="Enter Gihub Link"
                value={gitLinkDate}
                className="w-full"
                onChange={(e) => {
                  SetgitLink(e.currentTarget.value);
                }}
                styles={(_theme) => ({
                  input: {
                    background: "#011627",
                    border: "1px solid #607B96",
                    color: "#607B96",
                    letterSpacing: "2px",
                    fontFamily: fira.className,
                  },
                  label: {
                    fontStyle: fira.className,
                    fontFamily: fira.className,
                    color: "#607B96",
                    letterSpacing: "2px",
                  },
                })}
              />
              <TextInput
                type={"text"}
                label="_Live_Link"
                placeholder="Live Link"
                value={LiveLinkDate}
                className="w-full"
                onChange={(e) => {
                  SetLiveLink(e.currentTarget.value);
                }}
                styles={(_theme) => ({
                  input: {
                    background: "#011627",
                    border: "1px solid #607B96",
                    color: "#607B96",
                    letterSpacing: "2px",
                    fontFamily: fira.className,
                  },
                  label: {
                    fontStyle: fira.className,
                    fontFamily: fira.className,
                    color: "#607B96",
                    letterSpacing: "2px",
                  },
                })}
              />
              <Textarea
                placeholder="About Project"
                label="About"
                autosize
                minRows={2}
                value={aboutDate}
                className="w-full"
                onChange={(e) => {
                  Setabout(e.currentTarget.value);
                }}
                styles={(_theme) => ({
                  root: {},
                  input: {
                    background: "#011627",
                    border: "1px solid #607B96",
                    color: "#607B96",
                    fontFamily: fira.className,
                    letterSpacing: "2px",
                  },
                  label: {
                    color: "#607B96",
                    fontFamily: fira.className,
                    letterSpacing: "2px",
                  },
                })}
              />
              <Button
                fullWidth
                color={"green"}
                onClick={() => {
                  HandleSubmit();
                }}
              >
                UPLOAD
              </Button>
            </Group>
          </Stepper.Step>
        </Stepper>
      </Modal>
      <ActionIcon variant="transparent" onClick={open}>
        <IconPlus
          size="3rem"
          stroke={"0.8"}
          className="text-[#607B96]"
          color={"#607B96"}
          style={{
            color: "#607B96",
          }}
        />
      </ActionIcon>
    </>
  );
}
