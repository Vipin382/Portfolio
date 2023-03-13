import { Accordion, Box, Text, useMantineTheme } from "@mantine/core";
import { IconNotes } from "@tabler/icons-react";
import { AiFillCaretRight } from "react-icons/ai";
import { MdKeyboardArrowRight, MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiFolder } from "react-icons/hi";
import { Fira_Code } from "next/font/google";
import { useState } from "react";
import React from "react";
import { useRecoilState } from "recoil";
import { FolderDataState } from "@/atoms/atom";
import { replaceItemAtIndex } from "@/atoms/Logic";
import { FiExternalLink } from "react-icons/fi";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const fira = Fira_Code({ subsets: ["latin"] });

type AccordianControlTypes = {
  text: string;
  color: string;
  folderColor: string;
};
type NotesControlTypes = {
  text: string;
  color: string;
  onClick?: () => void;
};
type ContactsWrapperTypes = {
  text: string;
  icontype: string;
  color: string;
  link?: string;
};

export const BoxWrapper: React.FC<AccordianControlTypes> = ({
  text,
  color,
  folderColor,
}) => {
  return (
    <Box className={"flex gap-1"}>
      <HiFolder color={folderColor} size={"15"} />
      <Text color={color} size={"xs"} className={`${fira.className}`}>
        {text}
      </Text>
    </Box>
  );
};

export const NotesRowWrapper: React.FC<NotesControlTypes> = ({
  text,
  color,
  onClick,
}) => {
  return (
    <Box className="flex px-4 cursor-pointer gap-1 mt-1" onClick={onClick}>
      <IconNotes color={color} size={"15"} />
      <Text color={color} size={"xs"} className={`${fira.className}`} truncate>
        {text}
      </Text>
    </Box>
  );
};

export const ContactRowWrapper: React.FC<ContactsWrapperTypes> = ({
  text,
  icontype,
  color,
  link,
}) => {
  return (
    <Box
      className="flex pl-2 cursor-pointer gap-1 mt-1 items-center "
      component={
        icontype === "external" || "insta " || "linkedin" ? "a" : "div"
      }
      href={icontype === "external" || "insta " || "linkedin" ? link : ""}
    >
      {icontype === "email" ? (
        <MdEmail color={color} size={14} />
      ) : icontype === "external" ? (
        <FiExternalLink color={color} size={12} />
      ) : icontype === "linkedin" ? (
        <AiFillLinkedin color={color} size={16} />
      ) : icontype === "insta" ? (
        <AiFillInstagram color={color} size={16} />
      ) : (
        <BsFillTelephoneFill color={color} size={12} />
      )}
      <Text color={color} className={`${fira.className}`} size={"xs"} truncate>
        {text}
      </Text>
    </Box>
  );
};

const PersonalInfo = () => {
  const theme = useMantineTheme();
  const [value, setValue] = useState<string | null>(null);
  const [FolderList, setFolderList] = useRecoilState(FolderDataState);

  return (
    <Accordion
      variant="contained"
      radius="xs"
      defaultValue="customization"
      chevronPosition="left"
      chevron={<AiFillCaretRight />}
      value={value}
      onChange={setValue}
      className="transition-all ease-in-out"
      styles={{
        item: {
          background: "#011627",
          "&[data-active]": {
            background: "#011627",
            color: "white",
          },
          hover: {
            background: "#011627",
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
          translate: "-15px ",
        },
      }}
      //   w={252}
    >
      <Accordion.Item
        value="personalinfo"
        className="border border-[#607B96] border-opacity-30"
      >
        <Accordion.Control
          className={`${fira.className} hover:bg-[#011627]`}
          h={20}
          sx={{
            fontSize: "12px",
          }}
        >
          personal-info
        </Accordion.Control>
        <Accordion.Panel>
          <Accordion
            variant="contained"
            radius="xs"
            defaultValue="customization"
            chevronPosition="left"
            chevron={<MdKeyboardArrowRight color={theme.colors.textColor[0]} />}
            styles={{
              item: {
                background: "#011627",
                "&[data-active]": {
                  background: "#011627",
                },
              },
              chevron: {
                "&[data-rotate]": {
                  transform: "rotate(90deg)",
                },
              },
              label: {
                translate: "-15px ",
              },
            }}
          >
            {FolderList.map((item, index) => {
              return (
                <Accordion.Item
                  key={item.folderDetails.title}
                  value={`${item.folderDetails.title}`}
                  className="border-none -translate-x-2"
                >
                  <Accordion.Control className="hover:bg-[#011627]" h={18}>
                    <BoxWrapper
                      text={`${item.folderDetails.title}`}
                      color={theme.colors.textColor[0]}
                      folderColor={item.folderDetails.color}
                    />
                  </Accordion.Control>
                  <Accordion.Panel className=" -translate-y-4">
                    {item.NotesList.map((notes, fileIndex) => {
                      return (
                        <NotesRowWrapper
                          key={notes.fileName}
                          text={`${notes.fileName}`}
                          color={theme.colors.textColor[0]}
                          onClick={() => {
                            const newList = replaceItemAtIndex(
                              FolderList,
                              index,
                              fileIndex,
                              {
                                fileName: notes.fileName,
                                folder: notes.folder,
                                fileDetails: {
                                  name: notes.fileDetails.name,
                                  code: notes.fileDetails.code,
                                  active: !notes.fileDetails.active,
                                },
                              }
                            );

                            if (newList) {
                              setFolderList(newList);
                            }
                          }}
                        />
                      );
                    })}
                  </Accordion.Panel>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item
        value="contacts"
        className="border border-[#607B96] border-opacity-30"
      >
        <Accordion.Control
          chevron={<AiFillCaretRight />}
          className={`${fira.className} hover:bg-[#011627]`}
          sx={{
            fontSize: "12px",
          }}
          h={20}
        >
          contacts
        </Accordion.Control>
        <Accordion.Panel>
          <ContactRowWrapper
            icontype="email"
            text="vipin.bhati2020@gmail.com"
            color={theme.colors.textColor[0]}
          />
          <ContactRowWrapper
            icontype="phone"
            text="+9319217256"
            color={theme.colors.textColor[0]}
          />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default PersonalInfo;
