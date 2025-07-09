import { ref } from "vue";
export const useManagement = () => {
  const data = ref([
    {
      id: "1",
      images: "/management/Dereje_Fikru_Option_2-min_lcrcmd.jpg",
      name: "Dereje Abishu",
      title: "Finance Manager",
      description:
        "Derejea manages all financial planning and overseas finance department day to day operation of HaHuJob",
      symbol: "/management/finance.svg",
    },
    {
      id: "2",
      images: "/management/Michael_Tesfaye_Option_2-min_egxyst.jpg",
      name: "Michael Tesfaye",
      title: "Center Supervisor",
      description:
        "Michael manages and coordinates digital job matching services of HaHuJobs via its employment centers",
      symbol: "/management/recruiter.svg",
    },
    {
      id: "3",
      images: "/management/Mussie_Teshome_Option_2-min_jx4mes.jpg",
      name: "Musse Teshome",
      title: "Development Lead",
      description:
        "Musse directs and coordinates all HaHuJobs software development as well as the technical implementation of service components",
      symbol: "/management/Devloper.svg",
    },
    {
      id: "4",
      images: "/management/Minilik_Shumete_Option_1-min_akrqa4.jpg",
      name: "Minilik Shumete",
      title: "Development Lead",
      description:
        "Minilik directs and coordinates all HaHuJobs software development as well as the technical implementation of service components",
      symbol: "/management/Devloper.svg",
    },
  ]);
  return {
    managements: data,
  };
};
