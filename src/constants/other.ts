import { AiOutlineInstagram, AiFillGithub, AiFillApi, AiOutlineMail } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';
import { GrGraphQl } from 'react-icons/gr';
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiStyledcomponents,
  SiPostgresql,
  SiTiktok,
  SiTrpc,
  SiPython,
  SiFlask,
  SiDjango,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiMysql,
  SiLinux,
  SiGnubash,
  SiOpenai
} from 'react-icons/si';
import { FaReact, FaNodeJs, FaGitAlt, FaAws, FaRobot, FaCogs } from 'react-icons/fa';
import { TbBrandSupabase } from 'react-icons/tb';
import { VscTerminalBash } from 'react-icons/vsc';
import { MdAutoAwesome } from 'react-icons/md';
import { portfolioConfig } from '@/configs/portfolio';

export const socials = [
  {
    url: `mailto:${portfolioConfig.personal.email}`,
    Icon: AiOutlineMail
  },
  {
    url: '/linkedin',
    Icon: IoLogoLinkedin
  },
  {
    url: '/github',
    Icon: AiFillGithub
  }
];

// Navigation is now handled by portfolioConfig.navigation
export const navigation = portfolioConfig.navigation;

export const technologies = [
  {
    name: 'Python',
    Icon: SiPython
  },
  {
    name: 'AI Integration',
    Icon: FaRobot
  },
  {
    name: 'Prompt Engineering',
    Icon: SiOpenai
  },
  {
    name: 'Automation',
    Icon: MdAutoAwesome
  },
  {
    name: 'Flask',
    Icon: SiFlask
  },
  {
    name: 'Django',
    Icon: SiDjango
  },
  {
    name: 'Linux',
    Icon: SiLinux
  },
  {
    name: 'Docker',
    Icon: SiDocker
  },
  {
    name: 'Kubernetes',
    Icon: SiKubernetes
  },
  {
    name: 'Shell Scripting',
    Icon: VscTerminalBash
  },
  {
    name: 'Google Cloud',
    Icon: SiGooglecloud
  },
  {
    name: 'AWS',
    Icon: FaAws
  },
  {
    name: 'PostgreSQL',
    Icon: SiPostgresql
  },
  {
    name: 'MongoDB',
    Icon: SiMongodb
  },
  {
    name: 'Git',
    Icon: FaGitAlt
  }
];
