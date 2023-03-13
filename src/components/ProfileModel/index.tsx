import { Avatar, Center, Modal } from "@mantine/core";
import React, { useContext } from "react";
import { Fira_Code } from "next/font/google";
import { navContext } from "@/utils/context";
const fira = Fira_Code({ subsets: ["latin"] });

const ProfileModel = () => {
  const { value, newState } = useContext(navContext);

  return (
    <Modal
      opened={value}
      onClose={() => newState(false)}
      title="Profile"
      styles={(_theme) => ({
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
      <Center>
        <Avatar src="/img/avatar.png" radius={"50%"}  alt="it's me" size={"5xl"}/>
      </Center>
    </Modal>
  );
};

export default ProfileModel;
