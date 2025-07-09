import { ref } from "vue";
export const useAbout = () => {
  const data = ref([
    {
      id: "1",
      images: "/images/Hahu_core_hhv2oi.webp",
      images1: "/images/Hahu_core_dark_a6fsar.webp",
      text: "HaHuJobs a cloud services operating to capture structured data of the Ethiopian skilled and non-skilled labor market through digitally connecting thousands of job seekers in major Ethiopian cities as well as industrial parks. The platform in a collection of micro services groped to compose web application modules that offer a set of functionalities. HaHuJobs is an electronic product sold as service to a category of clients as per their specific needs in the labor market of Ethiopia. It features various service categories which revolves around data driven job matching of the right candidate with the right job opening, student tracing, capacity building and assessing of Jobseekers. This platform has sub services tailored to the specific industries and stakeholders, but as a primary concept HaHuJobs has a strong biometric based jobseeker identification and an automated method of matching workers with appropriate vacancy through structured data formats.",
      text2:
        "The service is built as an ecosystem of digital services to offer a holistic approach to respond to various data and automation gaps with in the Ethiopian labor market. It features layers and network of deployments that provide services to various types of industry stakeholders like, the jobseekers, employers, the government and development partners.",
      text3:
        "HaHuJobs services also include deliverology tacking and an online career capacity development platform called Muya that targets both universities and federal TVET organization graduates, and students. This allows for a data reference that eases the process of verifying jobseeker claimed qualification; furthermore, the service also keeps track of recruitment and employment of an individual through a module provide to employers (companies) of all category allowing for tracking recruitment trends. In addition to vacancies availed thorough HaHuJobs it also features a module that collects and standardizes aggregated job vacancies from local digital and analog posting entities.",
      text4:
        "The discussed components and services were conceived and implemented by our founders each of whom has notable experience in labor economics and a well demonstrated cababaility in software development. Each with their own pillar of contribution always are working hard to work on the next feature or service to even propel the product further. The founders tremendously realy on the technical advices offered by the technical advisory who are international experts in the labour market sector.",
    },
  ]);
  return {
    hahuinfo: data,
  };
};
