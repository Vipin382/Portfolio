import { ContactRowWrapper } from "@/components/personalInfo";
import { Accordion, useMantineTheme } from "@mantine/core";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Fira_Code } from "next/font/google";
import { Prism } from "@mantine/prism";
import { TextInput } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import duotoneDark from "prism-react-renderer/themes/nightOwl";
import { useForm, zodResolver } from "@mantine/form";
import { Loader } from "@mantine/core";
import { z } from "zod";
import moment from "moment";
import emailjs from "@emailjs/browser";
import { ShowNotification } from "@/components/ProjectModel";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Should be atleast 3 characters" })
    .max(30, { message: "maximum 30 characters" })
    .nonempty({ message: "required" }),
  email: z
    .string()
    .email({ message: "Invalid Email" })
    .nonempty({ message: "required" }),
  message: z
    .string()
    .max(400, { message: "Maximum 400 characters" })
    .nonempty({ message: "required" }),
});

const fira = Fira_Code({ subsets: ["latin"] });

const FormCode = `const button = document.querySelector("#sendBtn)

const message = {
  name:"Vipin Bhati",
  email:"",
  message:"",
  date:"Thu 21 Apr"
}

button.addEventListener('click',()=>{
  form.send(message);
})
`;

interface CodeInterface {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const theme = useMantineTheme();
  const [data, setData] = useState<CodeInterface | null>({
    name: "",
    email: "",
    message: "",
  });
  const [newCode, setCode] = useState(FormCode);
  const [loading, setLoading] = useState(false);
  const ref = useRef() as React.MutableRefObject<HTMLFormElement>;

  const form = useForm({
    validate: zodResolver(formSchema),
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    const message = `const button = document.querySelector("#sendBtn)

    const message = {
      name:${data?.name},
      email:${data?.email},
      message:${data?.message?.substring(0, 20)},
      date:${moment().format("MMM Do Y")}
    }
    
    button.addEventListener('click',()=>{
      form.send(message);
    })
    `;
    setCode(message);
  }, [data?.email, data?.message, data?.name]);

  return (
    <div className=" h-full flex flex-col md:flex-row ">
      <aside className="border-r border-[#607B96] border-opacity-30 md:w-[300px] border">
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
          <Accordion.Item value="contact">
            <Accordion.Control
              className={`${fira.className} hover:bg-[#011627]`}
              h={20}
              sx={{
                fontSize: "12px",
              }}
            >
              Contacts
            </Accordion.Control>
            <Accordion.Panel>
              <ContactRowWrapper
                text={"vipin.bhati2020@gmail.com"}
                icontype="email"
                color={theme.colors.textColor[0]}
              />
              <ContactRowWrapper
                text={"9319217256"}
                icontype="phone"
                color={theme.colors.textColor[0]}
              />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="findme">
            <Accordion.Control
              className={`${fira.className} hover:bg-[#011627]`}
              h={20}
              sx={{
                fontSize: "12px",
              }}
            >
              Find-me-also-in
            </Accordion.Control>
            <Accordion.Panel>
              <ContactRowWrapper
                text={"Linkedin"}
                icontype="linkedin"
                color={theme.colors.textColor[0]}
                link={"https://www.linkedin.com/in/vipin-bhati-6a18781b7/"}
              />
              <ContactRowWrapper
                text={"Instagram Account"}
                icontype="insta"
                link="https://www.instagram.com/vipin.bhati2020/"
                color={theme.colors.textColor[0]}
              />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </aside>
      <div className="w-full flex flex-col nm:flex-row">
        <div className=" flex justify-center items-center py-20 md:p-0 flex-1">
          <form
            className=" w-5/6 flex flex-col gap-3 "
            ref={ref}
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              try {
                const response = await emailjs.sendForm(
                  "service_ps3mvko",
                  "template_40x7jlb",
                  ref.current,
                  "0uRnrzIvc4eJruGjw"
                );
                ShowNotification({ type: "success", message: "email Created" });
                setLoading(false);
                form.values.email = "";
                form.values.message = "";
                form.values.name = "";
                setData({
                  email: "",
                  name: "",
                  message: "",
                });
              } catch (error) {
                setLoading(false);
                ShowNotification({
                  type: "error",
                  message: "Message Not Sent",
                });
                form.values.email = "";
                form.values.message = "";
                form.values.name = "";
                setData({
                  email: "",
                  name: "",
                  message: "",
                });
              }
            }}
          >
            <TextInput
              type={"text"}
              label="_name"
              name="from_name"
              id="from_name"
              placeholder="Your Name"
              value={form.getInputProps("name").value}
              onChange={(e) => {
                form.setFieldValue("name", e.currentTarget.value);
                setData({
                  name: e.currentTarget.value,
                  email: data?.email,
                  message: data?.message,
                });
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
              error={form.getInputProps("name").error}
            />
            <TextInput
              type={"email"}
              label="_email:"
              name="sender"
              id="sender"
              placeholder="Enter Your Email"
              value={form.getInputProps("email").value}
              onChange={(e) => {
                form.setFieldValue("email", e.currentTarget.value);
                setData({
                  email: e.currentTarget.value,
                  message: data?.message,
                  name: data?.name,
                });
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
              error={form.getInputProps("email").error}
            />
            <Textarea
              placeholder="Your comment"
              label="_message:"
              name="about"
              id="about"
              value={form.getInputProps("message").value}
              onChange={(e) => {
                form.setFieldValue("message", e.currentTarget.value);
                setData({
                  message: e.currentTarget.value,
                  email: data?.email,
                  name: data?.name,
                });
              }}
              styles={(_theme) => ({
                input: {
                  background: "#011627",
                  color: "#607B96",
                  letterSpacing: "2px",
                  fontFamily: fira.className,
                  border: "1px solid #607B96",
                },
                label: {
                  fontStyle: fira.className,
                  fontFamily: fira.className,
                  color: "#607B96",
                  letterSpacing: "2px",
                },
              })}
              error={form.getInputProps("message").error}
            />
            <button
              className={`bg-[#1E2D3D] tracking-wideer text-[#607B96] font-extralight py-2 rounded w-40 cursor-pointer ${fira.className}`}
            >
              {loading ? (
                <Loader
                  className="flex justify-center items-center"
                  size={"xs"}
                />
              ) : (
                "submit-message"
              )}
            </button>
          </form>
        </div>
        <div className="border-l border-opacity-30 bg-[#011627] border-[#607B96] hidden xsm:block flex-1">
          <Prism
            noCopy
            language="tsx"
            getPrismTheme={(_theme, _colorScheme) => {
              return duotoneDark;
            }}
            styles={{
              lineContent: {
                fontSize: "15px",
                letterSpacing: "2px",
                fontFamily: fira.className,
              },
              code: {
                height: "648px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              },
            }}
            withLineNumbers
            className="flex justify-center"
            colorScheme="dark"
            radius={"lg"}
          >
            {newCode}
          </Prism>
        </div>
      </div>
    </div>
  );
};
export default Contact;
