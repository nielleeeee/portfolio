import Link from "next/link";
import { MainContainer } from "@/components/container/containers";
import { TransitionMoveUp } from "@/components/animation/transition";
import ContactForm from "@/components/form/contactForm";
import { PortableText, PortableTextComponents } from "next-sanity";
import { ContactSection } from "../../../type";

export default function Contact({
  contactData,
}: {
  contactData: ContactSection;
}) {
  const { title, description } = contactData;

  const portableTextComponents: PortableTextComponents = {
    marks: {
      link: ({ value, children }) => {
        return (
          <Link
            href={`${value?.href}`}
            className="text-primary cursor-pointer font-medium"
          >
            {children}
          </Link>
        );
      },
    },
  };

  return (
    <section
      id="contact"
      className="bg-[url('/flat-mountains.png')] bg-no-repeat bg-center bg-fixed bg-cover"
    >
      <MainContainer>
        <TransitionMoveUp>
          <div className="mx-auto max-w-screen-xl py-16 sm:px-4 lg:px-6">
            <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-5 items-center">
              <div className="lg:col-span-2 lg:py-12 text-white bg-black/50 backdrop-blur-xl px-6 py-6 rounded-lg">
                <h2 className="text-3xl font-bold mb-8">{title}</h2>
                <div className="max-w-xl text-lg">
                  <PortableText value={description} components={portableTextComponents} />
                </div>

                <div className="mt-8">
                  <ul className="flex flex-col gap-3">
                    <li className="flex flex-row">
                      <span className="pr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-home fill-none stroke-orange-200 w-[20px] h-[20px]"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                      </span>
                      Mandaluyong City, Metro Manila, Philippines
                    </li>
                    <li className="flex flex-row">
                      <span className="pr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-phone fill-none stroke-orange-200 w-[20px] h-[20px]"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </span>
                      +63 977-6996-964
                    </li>
                    <li className="flex flex-row">
                      <span className="pr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-mail fill-none stroke-orange-200 w-[20px] h-[20px]"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </span>
                      jandnllplz@gmail.com
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg h-max bg-[#FFFFFF] p-8 shadow-lg lg:col-span-3 lg:p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </TransitionMoveUp>
      </MainContainer>
    </section>
  );
}
