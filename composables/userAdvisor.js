import { ref } from "vue";
export const useAdvisor = () => {
  const data = ref([
    {
      id: "1",
      images: "/images/johanna_ruth-min_ly9i83_lln3pp.webp",
      name: "Johanna Roth",
      title: "Technical Advisor",

      about:
        "Offers an expert  insights and guidelines on occupation standards and taxonomy classification to standardize HaHuJobs posted vacancies.",
      description:
        "Johanna is a PhD candidate in labor and development economics at Sciences Po Paris and holds an MPhil in Economics from the University of Oxford, where her dissertation investigated the role of AI in shaping skill demand using online job vacancies. Johanna is also a research associate at the Oxford Martin Programme on the Future of Development, where her work focuses on labour market intermediation projects in Ethiopia and South Africa. In addition to her academic work, Johanna has worked at the European Central Bank and the United Nations.",
      links: [
        {
          name: "Twitter",
          iconname: "mdi:twitter",
          url: "t.twitter",
        },
        {
          name: "LinkedIn",
          iconname: "mdi:linkedin",
          url: "https://www.linkedin.com/in/johanna-roth/",
        },
        {
          name: "email",
          iconname: "ic:baseline-email",
          url: "mailto:johanna.roth@economics.ox.xc.uk",
        },
      ],
    },
    {
      id: "2",
      images: "/images/Christian_Meyer-min_ximy6i_mumssj.webp",
      name: "Christian Johannes Meyer",
      title: "Technical Advisor",
      about:
        "Provides an expert guidelines on designing a scalable and holistic digital job matching model for HaHuJobs based on well researched  methodologies.",
      description:
        "Christian leads the Oxford Martin Programme on the Future of Development at the University of Oxford. The programme aims to use research and evidence to improve economic opportunities in low- and middle-income countries. Christian’s academic research lies at the intersection of development, labor, and behavioral economics. Before academia, he worked with the World Bank, the Center for Global Development, and the United Nations.",
      links: [
        {
          name: "Twitter",
          iconname: "mdi:twitter",
          url: "t.twitter",
        },
        {
          name: "LinkedIn",
          iconname: "mdi:linkedin",
          url: "https://www.linkedin.com/in/christianjmeyer/",
        },
        {
          name: "email",
          iconname: "ic:baseline-email",
          url: "mailto:christian.meyer@nuffield.ox.ac.uk",
        },
      ],
    },
    {
      id: "3",
      images: "/images/david_wu-min_v9t2fx_gvik3z.webp",
      name: "David Qihang Wu",
      title: "Technical Advisor",
      about:
        "Advices on enterprise outreach and service accuracy of  all HaHuJobs enterprise  modules  in addressing the Ethiopian hiring market needs on all targeted levels.",
      description:
        "David is a PhD candidate from the University of California, Berkeley. His research focuses on the hiring frictions of both large and small firms in Ethiopia. His current projects include understanding high turnover rates in large manufacturing firms, and how employment agencies help small firms overcome hiring barriers.",
      links: [
        {
          name: "Twitter",
          iconname: "mdi:twitter",
          url: "t.twitter",
        },
        {
          name: "LinkedIn",
          iconname: "mdi:linkedin",
          url: "https://www.linkedin.com/in/qihangwu55/",
        },
        {
          name: "email",
          iconname: "ic:baseline-email",
          url: "mailto:qihangwu@berkeley.edu",
        },
      ],
    },
    {
      id: "4",
      images: "/images/Hayat-Abdulmalik_oxdqiu_gjsi7i.webp",
      name: "Hayat Abdulmalik",
      title: "Technical Advisor",
      about:
        "Advice on the gender inclusivity and  balanced service outreach  of all HaHuJobs primary direct or indirect services intended for Ethiopian jobseekers.",
      description:
        "Hayat has a long career in development programming with extensive experience working with governments, donor agencies and private sector. She has managed several large scale initiatives with a more recent focus on gender, workforce development and digital economy. She is the managing director of Taya Consulting which works with private sector and development partners who are seeking to achieve social impact in Ethiopia.",
      links: [
        {
          name: "Twitter",
          iconname: "mdi:twitter",
          url: "t.twitter",
        },
        {
          name: "LinkedIn",
          iconname: "mdi:linkedin",
          url: "https://www.linkedin.com/in/hayat-abdulmalik-6058945/",
        },
        {
          name: "email",
          iconname: "ic:baseline-email",
          url: "mailto:hayat@tayaethiopia.com",
        },
      ],
    },
  ]);
  return {
    advisors: data,
  };
};
