import { ref } from "vue";
export const useFounder = () => {
  const data = ref([
    {
      id: "1",
      images: "/images/kaleab_mezgebu-min_pk8uym_hk1bk8.webp",
      fullname: "Kaleab Mezgebu",
      title: "COO/CEO",
      about: "Manages all operation and resources under HaHuJObs",
      description:
        "A system analyst and solutions architect with active involvement in system designs, incepting real world application of service components and managing stakeholder communications Kaleab leads the overall operation of HaHuJobs.",
      links: [
        {
          name: "Twitter",
          iconname: "mdi:twitter",
          url: "https://twitter.com/kaleabMT",
        },
        {
          name: "LinkedIn",
          iconname: "mdi:linkedin",
          url: "https://www.linkedin.com/in/kaleab-tesema-5885897a/",
        },
        {
          name: "email",
          iconname: "ic:baseline-email",
          url: "mailto:kaleab.mezgebu@hahu.jobs",
        },
      ],
    },
    {
      id: "2",
      images: "/images/Michael_sahelu_2-min_iyn8vk_vxi0fu.webp",
      fullname: "Michael Sahlu",
      title: "CTO",
      about: "Manages all technical resources under HaHuJObs",
      description:
        "A full stack developer specializing in front end implementation and architecture design. With over nine years of working experience Michael leads all the technology advances of product deployments.",
      links: [
        {
          name: "Twitter",
          iconname: "mdi:twitter",
          url: "https://twitter.com/miqee",
        },
        {
          name: "LinkedIn",
          iconname: "mdi:linkedin",
          url: "https://www.linkedin.com/in/michael-sahlu-8909ab51/",
        },
        {
          name: "email",
          iconname: "ic:baseline-email",
          url: "mailto:michael.sahlu@hahu.jobs",
        },
      ],
    },
    {
      id: "3",
      images: "/images/eskender_idyy07.webp",
      fullname: "Eskinder Mamo",
      title: "CBO",
      about: "Manages business outreaches of all HahuJobs services",
      description:
        "Innovation manager by training and with over eleven years of experience, Eskinder is involved in business and project development, specifically in developing concepts and proposals as well as securing funding for HaHuJobs.",
      links: [
        {
          name: "Twitter",
          iconname: "mdi:twitter",
          url: "https://twitter.com/EskinderMamo",
        },
        {
          name: "LinkedIn",
          iconname: "mdi:linkedin",
          url: "https://www.linkedin.com/in/eskinder-m-0b735469/",
        },
        {
          name: "email",
          iconname: "ic:baseline-email",
          url: "mailto:eskinder.mamo@hahu.jobs",
        },
      ],
    },
  ]);
  return {
    founders: data,
  };
};
