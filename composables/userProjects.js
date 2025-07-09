import { ref } from "vue";
export const useProjects = () => {
  const data = ref([
    {
      link: "/projects/9",
      imageSrc: "/images/Steep_project_dtcp2z.png",

      title: "STEM Education for Empowerment Project (STEEP)",

      description:
        "The STEM Education for Empowerment Project (STEEP) is a three-year $4 million CAD initiative funded by the Government of Canada through Global Affairs Canada (GAC) and The Barrett Family Foundation (BFF). The Humber Polytechnic leads the project under the project management of the International Development Institute (IDI) and is supported by implementing partners CAP Youth Empowerment Institute in Kenya, and HaHuJobs in Ethiopia.",
      partners: [
        {
          src: "/images/STEEP_Branding_Guidelines_2024_004_a323el.webp",
        },
        {
          src: "/images/Barrett_Foundation_Logo_copy_ws6x36.webp",
        },
        {
          src: "/images/STEEP_Branding_Guidelines_2024_005_idd5ac.webp",
        },
        {
          src: "/images/CAPYEI_Height_decreased.webp",
        },
        { src: "/images/HaHuJobs_Logo_1_ialafq.webp" },
      ],
    },
    {
      link: "/projects/8",
      imageSrc: "/images/SNV_edm5wp.png",
      title: "SNV RAYEE wage employment linkage",

      description:
        "  The RAYEE program is an SNV implementation that aims to  create meaningful employment in agriculture and  agri-business for 240,000 young people (of which 70% are   women) until the end of 2024. RAYEE will target five   geographical areas: the SNNPR, Oromia, Amhara, and Tigray regions as well as the Dire Dawa city. The  project is funded by the Mastercard Foundation as part of its Young Africa Works strategy.",
      client: {
        src: "/images/SNV_bgtbkv.webp",
      },

      partners: [
        {
          src: "/images/MCF_YAW_RGB_w3qct2.webp",
        },
        {
          src: "/images/EIC-01_p0mwke.webp",
        },
      ],
    },
    {
      link: "/projects/7",
      imageSrc: "/images/Emdms-C_x0qfbp.png",
      title: " EMDMS upgrade",

      description:
        "This project was contracted to HaHuJobs by ILO Ethiopia  as an extension of the MoFA BLA enforcement tool to  provide a holistic citizen service to both Ethiopian foreign employment seekers and deployed employees. Hence   why the objectives of this project were to upgrade the   former Ethiopian Migrant Data Management System (EMDMS) and integrate it with the National Recruitment Platform  (NRP) and MoFAs electronic monitoring system for   following up the implementation of BLA and MoU. The Ethiopian Migrant Worker management system features   digitization citizen services offered by the Ministry of Labor and Skills. The platform servers all foreign employment agencies, the ministry of labor and skills,    and the citizens of Ethiopia.",
      client: {
        src: "/images/ILO_logo_ynxrvx.webp",
      },

      partners: [
        {
          src: "/images/MOFA_02_k5oi6y.webp",
        },
        {
          src: "/images/MLS_only_logo_kzpstv.webp",
        },
      ],
    },
    {
      link: "/projects/9",
      imageSrc: "/images/Oxford-C_qqz482.png",
      title: " oxford university OSS",

      description:
        "A Research Team led by Dr. Morgan Hardy (New York  University Abu Dhabi), Dr. Christian Johannes Meyer(University of Oxford), and Dr. Marc Witte (IZA Institute of Labor Economics), approached HaHuJobs with a cooperation request to share and enhance vacancies as well as jobseeker data for an academic study of the labor market of Addis Ababa, Ethiopia. The study titled “Building Effective Employment Services Through Digital Technologies”",
      client: {
        src: "/images/OXFORD_logo_qeds3z.webp",
      },

      partners: [
        {
          src: "/images/world-bank-finance_hxjmqi.webp",
        },
        {
          src: "/images/MLS_only_logo_kzpstv (1).webp",
        },
      ],
    },
    {
      link: "/projects/6",
      imageSrc: "/images/MoFA-C-New_oxb7zl.png",
      title: "MOFA BLA Tool",

      description:
        " In regards to tragedies and abuses faced by Ethiopian migrant workers in the Middle East, labor migration and  the protection of Ethiopian migrant workers in destination countries has become one of the major   political discourses for the Ethiopian Government. To respond to this challenge, the government of Ethiopia has taken multiple initiatives in improving labor migration governance, to state a few, put in place new  legal instruments, institutional restructuring,  established Ethiopian overseas employment registration  platform, capacity building of all relevant stakeholders, and signing of Bilateral labor agreement  or Memorandum of Understanding with destination countries. Currently, the Ethiopian Government has  signed BLA/MoUs with Jordan, KSA, UAE, and Qatar as a   major instrument for the protection of migrant workers.  However, there is no mechanism to monitor the  implementation of these BLAs/MoUs.",
      client: {
        src: "/images/ILO_logo_ynxrvx (1).webp",
      },

      partners: [
        {
          src: "/images/MOFA_02_k5oi6y.webp",
        },
        {
          src: "/images/MLS_only_logo_kzpstv.webp",
        },
      ],
    },
    {
      link: "/projects/5",
      imageSrc: "/images/NRP_C_New_tejuqi.png",
      title: "The NRP",

      description:
        " HaHuJobs was contracted by Mercy Corps Ethiopia to build  the National Recruitment Platform for the government of Ethiopia, The platform featured various functions but  was mainly utilized as a recruiting tool to deploy  Ethiopian professionals to overseas job orders. The  Ethiopian National Recruitment Platform, launched in  2019 by the government aims at creating a regular, safe and orderly labor mobility program, targeting semi-skilled and skilled Ethiopian Job seekers while maintaining current temporary migration of low skilled workers abroad. In a sector where there is a clear surplus of job seekers the government has planned to redouble recruitment and placement of workers in host countries with expressed interest in migrant labor.",
      client: {
        src: "/images/mc_color_ivwoif.webp",
      },

      partners: [
        {
          src: "/images/MoH_logo_ib48ra.webp",
        },
        { src: "/images/PMO-Logo-resized_jscmn9.webp" },
        { src: "/images/MLS_only_logo_kzpstv.webp" },

        { src: "/images/MOFA_02_k5oi6y.webp" },
      ],
    },
    {
      link: "/projects/4",
      imageSrc: "/images/Jobs-Protection-C_yvrxsl.png",
      title: "Jobs protection Facility",

      description:
        "As the implementer of the jobs protection facility   program, in November 2021 First consult contracted HaHuJobs to build the fund application, review and reporting platform. The platform enables investors within the industrial park to digitally apply for the support through structured forms with clear guidelines. All successfully submitted applications were offered to officers for review for qualification. The platform also provided a reporting and analytics dashboard for follow-up. ",
      client: {
        src: "/images/FC_logo.png",
      },

      partners: [
        {
          src: "/images/CBE_logo_veu828.webp",
        },
        { src: "/images/uk_aid.png" },
        { src: "/images/FSD_logo_bseyhy.webp" },
        { src: "/images/BMZ_wh8n9q.webp" },
      ],
    },
    {
      link: "/projects/3",
      imageSrc: "/images/Bridges-C_zgej9e.png",

      title: " Young Africa works BRIDGES program",
      description:
        " Funded by the Master Card Foundation and implemented by   First Consult the Employment Linkage Bridge works on putting in place a worker recruitment and retention  system within ten industrial parks. Interventions within this BRIDGE are focused on enhancing the efficiency of the worker recruitment process by addressing quantitative and information mismatch issues in the  recruitment process. Additionally, this BRIDGE targets retention within factories through the development of   soft skill training programs and curriculum aimed at  easing the transition of workers into the industrial  workforce. ",
      client: {
        src: "/images/FC_logo.png",
      },

      partners: [
        {
          src: "/images/Bridges_logo_xtfovx.webp",
        },
        { src: "/images/MCF_YAW_RGB_w3qct2.webp" },
        { src: "/images/EIC-01_p0mwke.webp" },
      ],
    },
    {
      link: "/projects/2",
      imageSrc: "/images/World-Bank-C_vubt0h.png",

      title: "  World bank HIPCIE research project",
      description:
        "The Hawassa Industrial Park Community Impact Evaluation  Project is a large-scale, rigorous evaluation of the  impact that the government’s flagship industrial park in Hawassa has on workers, their rural origin households,and their broader origin communities. The project team  is led by two academic principal investigators and implemented in cooperation with the World Bank Group. The project combines primary survey data across communities in Ethiopia’s Southern Nations, Nationalities, and People’s (SNNP) Region with administrative data from the Hawassa Industrial Park Sourcing and Training Employees in the Region (HIPSTER)  scheme that sources and hires workers from across SNNPR.",
      client: {
        src: "/images/EP-01_ghi9xg.webp",
      },

      partners: [
        {
          src: "/images/EIC-01_p0mwke.webp",
        },
        { src: "/images/DAI.png" },
        { src: "/images/world-bank-finance_hxjmqi.webp" },
      ],
    },
    {
      link: "/projects/1",
      imageSrc: "/images/Hipster-C_mpugwq.png",

      title: " HIPSTER Labor Management Database",
      description:
        " In June 2018 HaHuJobs was contracted by Enterprise Partners (a program implemented by First Consult) to  automate components of the Hawassa Industrial Park Sourcing and Training Employees in the Region project. The program worked to change the way that markets work  for the poor so that poor people were included in the   benefits of growth and economic development as   consumers, employees and investors. In each sector and sub-sector, Enterprise Partners identified key  constraints and developed socially and environmentally sensitive strategies to transform markets by working with industry actors to introduce better business  models. In this particular engagement with HaHuJobs theproject aimed to streamline the process of sourcing,   screening, recruiting, and allocation of jobseekers to  labor demands from companies in Hawassa industrial park. HaHuJobs was contracted to digitize the process of capturing details of sourced and screened job seekers,capture details of their grading, digitally allocate  them and follow their recruitment status. ",
      client: {
        src: "/images/EP-01_ghi9xg.webp",
      },

      partners: [
        {
          src: "/images/EIC-01_p0mwke.webp",
        },
        { src: "/images/DAI.png" },
        { src: "/images/uk_aid.png" },
      ],
    },
  ]);
  return {
    projects: data,
  };
};
