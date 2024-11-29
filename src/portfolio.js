/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aden's Portfolio",
  description:
    "Data Science Student.",
  og: {
    title: "Aden Siau's Portfolio",
    type: "website",
    url: "http://adensiau.com/",
  },
};

//Home Page
const greeting = {
  title: "Aden Siau",
  logo_name: "AdenSiau",
  nickname: ".",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/10d8i5pgQqPf_qhFTS5PVz47Nq-6SZ3XL/view?usp=sharing",
  portfolio_repository: "https://github.com/adensiau/adensiau-portfolio",
  githubProfile: "https://github.com/adensiau",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/adensiau",
  // gmail: "adensiau@gmail.com",
  // instagram: "https://www.instagram.com/aden.siau/"

  {
    name: "Github",
    link: "https://github.com/adensiau",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:adensiau@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/aden.siau/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing models for various deeplearning and statistical use cases",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
        "⚡ Constructing image analysis and pattern recognition models"
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
      

// Education Page
const degrees = {
  degrees: [
    {
      title: "Monash University",
      subtitle: "Bachelor of Applied Data Science Advanced (Honours)",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2023-2026",
      descriptions: [
        "⚡ I have studied basic computer science subjects like Data Structures and Algorithms.",
        "⚡ I have done subjects that cover Deep Learning, Machine Learning and other Data Science techniques",
      ],
    };



// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects.",
  avatar_image_path: "projects_image.svg",
};
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
