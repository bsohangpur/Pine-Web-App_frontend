// import { FaRegUser } from "react-icons/fa";
import { RiInformationLine, RiPriceTag3Line } from "react-icons/ri";
import {BiShow, BiLinkAlt} from 'react-icons/bi'
import { BsDatabaseLock, BsPeople } from "react-icons/bs";
import {MdSelfImprovement, MdBalance, MdSecurity, MdContacts, MdOutlineChildCare, MdOutlineUpdate} from 'react-icons/md';
import {HiOutlineSpeakerphone} from 'react-icons/hi';
import {SiGooglemarketingplatform} from 'react-icons/si';

const privacyPolicy = [
  {
    icon: RiInformationLine,
    title: "Information We Collect",
    content:
      "We may collect both personal and non-personal information from you when you interact with our website or use our services. Personal information may include your name, email address, phone number, billing address, and other identifiable details. Non-personal information may include browser type, IP address, device information, and other technical data.",
  },
  {
    icon: BiShow,
    title: "How We Use Your Information",
    content:
      "We may use the information we collect for various purposes, including but not limited to.",
  },
  {
    icon: MdSelfImprovement,
    title: "Providing and Improving Our Services",
    content:
      "We use your information to deliver the services you request, customize your experience, and ensure the functionality and security of our website.",
  },
  {
    icon: HiOutlineSpeakerphone,
    title: "Communicating with you",
    content:
      "We may use your contact information to respond to your inquiries, provide customer support, send important notices, and inform you about updates, promotions, or other relevant information related to our services.",
  },
  {
    icon: SiGooglemarketingplatform,
    title: "Marketing and analytics",
    content:
      "With your consent, we may use your information to personalize advertisements, measure the effectiveness of our marketing campaigns, and gather insights to improve our services.",
  },
  {
    icon: MdBalance,
    title: "Legal compliance",
    content:
      "We may disclose your information to comply with applicable laws, regulations, or legal processes, and to protect our rights, privacy, safety, or property, as well as those of our users and the public.",
  },
  {
    icon: MdSecurity,
    title: "Data Security",
    content:
      "We prioritize the security of your personal information and employ reasonable measures to protect it from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    icon: BsDatabaseLock,
    title: "Data Retention",
    content:
      "We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law. We may also retain and use aggregated or anonymized data for statistical purposes, which cannot be used to identify you.",
  },
  {
    icon: BsPeople,
    title: "Third-Party Disclosure",
    content:
      "We may engage third-party service providers, contractors, or affiliates to assist us in delivering our services or conducting business operations. These parties may have access to your personal information but are obligated to keep it confidential and use it only for the purposes we specify. We may also share your information with trusted third-party partners or vendors for marketing purposes or to provide additional services that may be of interest to you. However, we will obtain your consent before sharing your personal information for such purposes",
  },
  {
    icon: BiLinkAlt,
    title: "Links to Third-Party Websites",
    content:
      "Our website may contain links to third-party websites or services that are not operated or controlled by us. We are not responsible for the privacy practices or the content of these third-party sites. We encourage you to review the privacy policies of any third-party websites you visit.",
  },
  {
    icon: RiPriceTag3Line,
    title: "Pricing packages",
    content:
      "We offer different pricing packages for our services, depending on the scope of the project and the features included. The pricing packages may include different levels of support, customization, and maintenance. We may collect payment information from you in order to process your payment for our services.",
  },
  {
    icon: MdOutlineChildCare,
    title: "Children's Privacy",
    content:
      "Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe that we have inadvertently collected information from a child, please contact us immediately, and we will take appropriate measures to remove the information.",
  },
  {
    icon: MdOutlineUpdate,
    title: "Updates to the Privacy Policy",
    content:
      "We reserve the right to modify this Privacy Policy at any time without prior notice. Any changes will be effective immediately upon posting the updated Privacy Policy on our website. We encourage you to review this Privacy Policy periodically to stay informed about our information practices. We also use the information that is gathered to tailor our content to suit your needs and help our advertisers better understand our audience’s demographics. This is essential to keeping our service upgraded and well known to our potential customers. Members may unsubscribe to any of our electronic newsletters at any time by following the instructions contained at the end of every newsletter.",
  },
  {
    icon: MdContacts,
    title: "Contact Us",
    content:
      "If you have any questions, concerns, or requests regarding this Privacy Policy or the use of your personal information, please contact us at +91 9700836220 or mail us at kaaeotechsolutions@gmail.com",
  },
];

export default privacyPolicy;
