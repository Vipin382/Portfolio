import { atom } from "recoil";

export interface FileTypeInterface {
  name: string;
  code: string;
  active: boolean;
}

export interface FolderType {
  color: string;
  title: string;
}

export interface NotesTypeInterface {
  fileName: string;
  folder: string;
  fileDetails: FileTypeInterface;
}

export interface CatalogInterface {
  folderDetails: FolderType;
  NotesList: NotesTypeInterface[];
}

const PersonalInfo = `/**
* Greetings everyone, I believe you are all familiar with me as you have visited my portfolio.
* My name is Vipin, and I am a 22-year-old developer who enjoys exploring new ideas and concepts. 
* My passion for development began in 2015 when I created my first website, and since then, 
* I have been pursuing my dream career. However, I acknowledge that there is still much for me to 
  learn and improve upon, as the saying goes.
* I now find learning incredibly enjoyable, and the more I learn, the more curious I become. 
* It was challenging for me to acquire resources and figure out how to learn new things since I
  come from a family with limited technical and financial background. However, as the saying goes, 
  "The thirsty man goes to the well, the well doesn't go to the thirsty man," 
*/`;

const Interest = `/** 
* My Interest,Hobbies
 I am a person who has a strong enthusiasm for food and finds joy in cooking. 
 My culinary skills are diverse,   and I am able to prepare a range of dishes such 
 as noodles, pulao, samosas, biryani, burgers, and French fries, among others. Along 
 with cooking, I have a passion for playing badminton, and I have played the sport 
 for several years, including with national players. Additionally, I have a talent 
 for sketching and have created portraits, winning prizes in some competitions. I also 
 enjoy reading novels, having recently completed One Thousand Nights, as well as watching 
 movies and anime, and I can provide insightful commentary on their stories. Furthermore, 
 I have a deep passion for travel and aspire to explore the world.
*/`;

const Experience = `\n/**
* My_Experience
 As a developer, I have taught myself everything I know. Before venturing into 
 blockchain technology, I had created Android apps such as Whatsapp and Instagram 
 clones.I have also developed an augmented reality (AR) application using Unity.
  During my exploration of the blockchain, I discovered the potential of 3D
 modeling for creating visually appealing and user-friendly websites and apps. As a
 result, I am currently learning Three.js and Blender to improve my skills in this area.

* My web development experience spans six months, during which I have completed freelance projects with friends and worked on a blockchain-based startup. 
Our idea involved using arbitrage and flash loans to our advantage. Prior to this, I was involved in app development using both Java and Kotlin. Currently, 
I am focusing on machine learning and working on a website that can facilitate meetings based on user input. I have also conducted research on few-shot learning 
for two months with Nagasaki University in Japan.Additionally, I briefly worked as a web developer for a company for a month.
* My prior experience was in app development, where I utilized both Java and 
Kotlin.

*/`;

const School = `\n/**
*School : Ursuline Convent Senior Secondary School
I did my Schooling From Ursuline convent school, was an average student
but always aspires to do something
* High School : 92%
* Higher Secondary : 93%
*/`;

const University = `\n/**
I am enrolled at VIT Chennai University, where I am pursuing a Bachelor's degree in Machine Learning and Artificial Intelligence. Currently, I am in my third year of studies.
*/`;

export const FolderData: CatalogInterface[] = [
  {
    folderDetails: {
      title: "bio",
      color: "#FF6B6B",
    },
    NotesList: [
      {
        fileName: "personal-info.txt",
        folder: "bio",
        fileDetails: {
          name: "bio",
          code: `\n${PersonalInfo}`,
          active: true,
        },
      },
    ],
  },
  {
    folderDetails: {
      title: "interest",
      color: "#51CF66",
    },
    NotesList: [
      {
        fileName: "my_interest.txt",
        folder: "interest",
        fileDetails: {
          name: "my_interest",
          code: `\n${Interest}`,
          active: false,
        },
      },
      {
        fileName: "my_Experience.txt",
        folder: "experience",
        fileDetails: {
          name: "my_experience",
          code: `${Experience}`,
          active: false,
        },
      },
    ],
  },
  {
    folderDetails: {
      title: "education",
      color: "#339AF0",
    },
    NotesList: [
      {
        fileName: "school.txt",
        folder: "education",
        fileDetails: {
          name: "school",
          code: `${School}`,
          active: false,
        },
      },
      {
        fileName: "university.txt",
        folder: "education",
        fileDetails: {
          name: "university",
          code: `${University}`,
          active: false,
        },
      },
    ],
  },
];

export const FolderDataState = atom({
  key: "folder",
  default: FolderData,
});

export const CodePanel = atom({
  key: "panel",
  default: true,
});

export interface ProjectCardInterface {
  ImgLink: string;
  about: string;
  LiveLink: string;
  gitLink?: string;
  ProjectName: string;
}

const ProjectCardInitial: ProjectCardInterface[] = [];

export const ProjectCardState = atom({
  key: "projectKey",
  default: ProjectCardInitial,
});
