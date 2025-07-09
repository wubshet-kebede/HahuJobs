import { ref } from "vue";

export const useServices = () => {
  const data = ref([
    {
      id: "1",
      image: "/images/primary.webp",
      title: "HaHu Primary",
      text: "Hahucore",
      width: "200",
      height: "197",

      description:
        "HahuJobs Primary services are deployments targeting the Ethiopian jobseeker, with both online and assisted models the platform caters to the tool needs of looking for a job at all levels of employment.It features vacancy aggregation and posting from various sources as well as enterprises, builds career profiles, apply for jobs, and subscribe to customized alerts for each user.",
      external_link: "https://hahu.jobs/",
    },
    {
      id: "2",
      image: "/images/HahuEnterprise_jzya32.webp",
      title: "HaHu Enterprise",
      text: "enterprise",
      width: "310",
      height: "197",

      description:
        "Provides human resources  and related services starting from job vacancy announcements, and recruitment, all the way to human resources management until termination. This deployment also offers unique  services to a category of businesses that operate within industrial  parks, in addition to Addis Ababa-based foreign employment agencies.",
      external_link: "https://enterprise.hahu.jobs/",
    },
    {
      id: "3",
      image: "/images/industry_xj9w36.webp",
      title: "HaHu Industry Parks",
      text: "industryPark",
      width: "310",
      height: "197",

      description:
        "With biometric-based identification to both register workers and job seekers. The process begins with mass registration of employment seekers to build a digital pool of job seekers from which they are allocated for labor demands from factories within the industrial parks. It logs the recruitment status of allocated jobseekers and indexes transaction data for analytics.",
      external_link: "https://industryparks.hahu.jobs",
    },
    {
      id: "4",
      image: "/images/HahuTvet_nxnulp.webp",
      title: " HaHuJob TVET",
      text: "tvet",
      width: "310",
      height: "197",
      description:
        " HaHuJobs TVET is a targeted service deployment to trace skill-based education graduates and content-encoding service offered for TVET institutes intended for both formal as well as career guiding lesson materials. The platform aims to capacitate delivery departments ofboth private and government TVET institutes for digitized graduatetracing and supporting TVET trainers to provide curricular as well as non-structured digital learning material.  ",
      external_link: "https://tvet.hahu.jobs/",
    },

    {
      id: "5",
      image: "/images/University_gy8mj4.webp",
      title: "HaHu University",
      text: "university",
      width: "310",
      height: "197",

      description:
        "HaHuJobs university is a deployment intended to serve the needs of deliverology departments, offer alternative digital contend disbursement for instructors, and trace graduates of Ethiopian universities that are subscribers of these services. The service offers a reporting and visualization for all its service components cospeciation higher education institutes with well-compiled data to acquire relevant insights regarding the labor market and competence requirements.",
      external_link: "https://university.hahu.jobs/",
    },
    {
      id: "6",
      image: "/images/HahuMuya_ta2aik.webp",
      title: "Hahu Muya",
      text: "muya",
      width: "310",
      height: "197",

      description:
        "  HaHuJobs Muya is a capacity-building and training platform intended for both jobseeker and students’ which sources various digital contents from training institutes in both document and multimedia formats. It offers users a digitally enabled environment to consume both formal and non-formal training material sourced from instructors within the local context. Resources can be offered in targeted or public access formats depending on the contributor's choice. ",
      external_link: "https://muya.hahu.jobs/",
    },
  ]);
  return {
    services: data,
  };
};
