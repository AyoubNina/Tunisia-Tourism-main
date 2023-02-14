import React from "react";
import { Box, Icon, Text, Stack, Link, chakra } from "@chakra-ui/react";
import { IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { DiGithubBadge } from "react-icons/di";

const FooterLink = ({ icon, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" color="gray.400" />
  </Link>
);

const links = [
  {
    icon: DiGithubBadge,
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    icon: IoLogoTwitter,
    label: "Twitter",
    href: "https://twitter.com/",
  },
  {
    icon: IoLogoLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/",
  },
  {
    icon: MdEmail,
    label: "Email",
    href: "mailto:jihene.ayoub@gmail.com",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/channel/",
  },
];

export const Footer = () => (
  <div as="footer" mt={12} textAlign="center">
    <Stack mt={4} direction="row" spacing="12px" justify="center">
      <Text fontSize="md" px="1rem" className="i" color="gray.600">
        <strong>

          <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
            Carte de la Tunsie 
          </a>
        </strong>
      </Text>
    </Stack>
    <Stack as="footer" mt={12} textAlign="center">
      <Text px="1rem" className="i" color="gray.500" fontSize="md" isTruncated>

        <br></br>
      </Text>
    </Stack>
    <Text>
      <Stack mt={4} direction="row" spacing="12px" justify="center">
        {links.map((link) => (
          <FooterLink key={link.href} {...link} />
        ))}
      </Stack>
    </Text>
  </div>
);

export default Footer;
