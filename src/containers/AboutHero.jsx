import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Image } from "@chakra-ui/image";
import about_hero_img from "../assets/about_hero_img.jpg";
import { Link } from "react-router-dom";

const AboutHero = ({ home }) => {
  const motionProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const bg = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.200");
  const headingSize = useBreakpointValue({ base: "lg", md: "2xl" });
  const textSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Box bg={bg} py={5} px={4}>
      <Box maxW={{ base: "100%", md: "80%", lg: "70%" }} mx="auto">
        <Flex flexWrap="wrap">
          <motion.div {...motionProps}>
            <Box flex="1" textAlign="center" mb={8}>
              <Heading as="h2" size={headingSize}>
                About Us
              </Heading>
              <Text color={textColor} mt={4} fontSize={textSize}>
                <span>
                  {" "}
                  <b> A Haven of Healing: Where Compassion Meets Care</b>
                  <br /> Welcome to our hospital, a place where healing begins
                  and hope flourishes. Within our walls, we have created a
                  sanctuary of warmth and compassion, driven by a deep
                  commitment to serving our community. As you embark on this
                  journey with us, we invite you to discover the heart and soul
                  that beats at the core of our hospital.
                </span>{" "}
                {!home && (
                  <span>
                    {" "}
                    <br /> <b>
                      {" "}
                      Specialized Faculty- Our Superheroes
                    </b> <br /> Our team of experts comprises renowned
                    specialists who bring a wealth of knowledge, experience, and
                    innovation to the table. Each physician is a leader in their
                    respective field, committed to delivering the highest
                    standard of care and pushing the boundaries of medical
                    excellence. With their deep expertise and collaborative
                    approach, our specialized faculty ensures that you receive
                    personalized, cutting-edge treatments tailored to your
                    specific needs. <br />
                    <b>
                      {" "}
                      Laboratory: Unveiling the Truth, Empowering Lives
                    </b>{" "}
                    <br /> In our laboratory, every test is more than just a
                    result; it holds the potential to change lives. With
                    cutting-edge technology and a team of passionate scientists,
                    we delve into the mysteries of the human body, unraveling
                    the truth that lies within. Our laboratory is not merely a
                    place of tests and numbers, but a gateway to clarity and
                    understanding. <br />
                    <b>
                      {" "}
                      Child Health Clinic: Nurturing the Future, Embracing the
                      Innocence
                    </b>{" "}
                    <br /> In our child health clinic, the laughter of little
                    ones fills the air, painting the walls with joy and
                    innocence. We understand the delicate nature of childhood
                    and the immense trust placed in our hands. With tender care
                    and unwavering dedication, our pediatricians and nurses
                    create a haven where children can heal and thrive. We see
                    beyond the ailments and medical charts, recognizing the
                    unique spirit within each child. From the first tearful
                    moments to the joyful milestones, we become partners in your
                    child's health journey. <br />
                    <b> A Community United: Together We Thrive</b> <br /> Our
                    hospital is more than just a physical space it is a vibrant
                    tapestry woven from the threads of our community. We embrace
                    the rich diversity of voices that make us who we are,
                    recognizing that true healing comes from unity and
                    collaboration. Through community engagement and outreach
                    programs, we extend our healing touch beyond our walls,
                    bridging gaps in healthcare access and empowering
                    individuals with knowledge. We listen to your needs, working
                    hand in hand to address the challenges that impact us all.
                    Together, we create a ripple effect of positive change,
                    nurturing a healthier, more resilient community.
                  </span>
                )}
              </Text>
              {home && <Box textAlign="center">
                <Button colorScheme="blue" size="lg" mt={2}>
                  <Link to="/aboutus">Learn More</Link>
                </Button>
              </Box>}
              <Image
                className=" rounded-md mt-4"
                alt="about_hero_img"
                src={about_hero_img}
              ></Image>
            </Box>
          </motion.div>
          {!home && (
            <motion.div {...motionProps}>
              <Box flex="1" textAlign="center" mb={8}>
                <Heading as="h3" size={headingSize}>
                  Our Mission
                </Heading>
                <Text color={textColor} mt={4} fontSize={textSize}>
                  Our mission is simple yet powerful: to provide exceptional
                  healthcare that transforms lives. We are committed to
                  delivering compassionate, patient-centered care of the highest
                  quality. Our dedicated team of healthcare professionals works
                  tirelessly to ensure that each individual receives
                  personalized attention, respect, and the best possible medical
                  outcomes. Through compassionate care, innovative treatments,
                  and a holistic approach, we aim to uplift and transform lives.
                  We are committed to exceeding expectations, pushing the
                  boundaries of what is possible, and challenging the status
                  quo. By embracing innovation and investing in advanced
                  technology, we continuously push the boundaries of medical
                  excellence. Beyond our walls, we actively engage with our
                  community, promoting health education, preventive care, and
                  initiatives that improve overall well-being. Our mission is
                  driven by a deep sense of empathy, a passion for healing, and
                  a belief in the inherent dignity of every person. Together, we
                  are making a positive impact, one life at a time.
                </Text>
              </Box>
            </motion.div>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutHero;
