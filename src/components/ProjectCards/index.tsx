import { ProjectCardInterface } from "@/atoms/atom";
import { Card, Image, Text, Button, Group } from "@mantine/core";
import { Fira_Code } from "next/font/google";
const fira = Fira_Code({ subsets: ["latin"] });

type NewProjectCardInterface = ProjectCardInterface & {
  index: number;
};

const ProjectCards: React.FC<NewProjectCardInterface> = ({
  ImgLink,
  about,
  gitLink,
  LiveLink,
  ProjectName,
  index,
}) => {
  return (
    <Group className="flex flex-col items-center px-6 justify-center min-w-[230px] max-w-[300px] w-full">
      <Group>
        <Text
          className={fira.className}
          size={"md"}
          weight={"bolder"}
          color="blue.5"
        >
          {`Project ${index + 1}`}
        </Text>
        <Text className={`text-[#607B96] ${fira.className}`} size={"md"}>
          {`//_${ProjectName.substring(0, 12)}`}
        </Text>
      </Group>
      <Card shadow={"md"} className="bg-[#011221]" padding="lg" radioGroup="md">
        <Card.Section>
          <Image src={ImgLink} height={140} alt="Norway" />
        </Card.Section>
        <Text size={"xs"} color={"dimmed"} mt={10} mb={20}>
          {about}
        </Text>

        <Button
          color={"red"}
          fullWidth
          radius="xs"
          component="a"
          href={LiveLink}
        >
          View Project
        </Button>
      </Card>
    </Group>
  );
};

export default ProjectCards;
