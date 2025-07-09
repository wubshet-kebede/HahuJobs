import { ref } from "vue";
export const useHqoperation = () => {
  const data = ref([
    {
      id: "1",
      images: "/hq/amanuel.webp",
      name: "Amanuel Abay",
      title: "Junior Software Developer",
      description:
        "Responsible for designing, developing and testing HahuJobs software products.",
      symbol: "/management/Devloper.svg",
    },
    {
      id: "2",
      images: "/hq/Biruk_Molla_Option_1-min_jha3gj.jpg",
      name: "Biruk Molla",
      title: "Software Developer",
      description:
        "Responsible for designing, developing and testing HahuJobs software products.",
      symbol: "/management/Devloper.svg",
    },
    {
      id: "3",
      images: "/hq/Dagim_Shimelis-min_j4ae1g.jpg",
      name: "Dagim Shimelis",
      title: "Software Developer",
      description:
        "Responsible for designing, developing and testing HahuJobs software products.",
      symbol: "/management/Devloper.svg",
    },
    {
      id: "4",
      images: "/hq/dani.webp",
      name: "Daniel Kassahun",
      title: "Junior Software Developer",
      description:
        "Responsible for designing, developing and testing HahuJobs software products.",
      symbol: "/management/Devloper.svg",
    },
    {
      id: "5",
      images: "/hq/Joni_Mesfin_Option_2-min_xdvd0m.jpg",
      name: "Joni Mesfin",
      title: "Junior Software Developer",
      description:
        "Responsible for designing, developing and testing HahuJobs software products.",
      symbol: "/management/Devloper.svg",
    },

    {
      id: "6",
      images: "/hq/solomon.webp",
      name: "Solomon Sitotaw",
      title: "Junior Software Developer",
      description:
        "Responsible for designing, developing and testing HahuJobs software products.",
      symbol: "/management/Devloper.svg",
    },
    {
      id: "7",
      images: "/hq/Nebil_Mohammed_Option_2-min_nzinqg.jpg",
      name: "Nebil Mohammed",
      title: "UI/UX",
      description:
        "Responsible for creating overall concepts that enhance a customer's experience on the website",
      symbol: "/hq/design.svg",
    },
    {
      id: "8",
      images: "/hq/Abel_Tadesse_option_1-min_ryfstg.jpg",
      name: "Abel Tadesse",
      title: "Data Officer",
      description: "Responsible for compiling, sorting and processing data",
      symbol: "/hq/data_encoder.svg",
    },
    {
      id: "9",
      images: "/hq/Betelhem_Ketema_Option_1-min_uvd2qj.jpg",
      name: "Betelhem Ketema",
      title: "Data Encoder",
      description: "Responsible for compiling, sorting and processing data",
      symbol: "/hq/data_encoder.svg",
    },
    {
      id: "10",
      images: "/hq/edom.webp",
      name: "Edom Deribie",
      title: "Data Officer",
      description: "Responsible for compiling, sorting and processing data",
      symbol: "/hq/data_encoder.svg",
    },
    {
      id: "11",
      images: "/hq/eyerus.webp",
      name: "Eyerusalem Amsalu",
      title: "Data Officer",
      description: "Responsible for compiling, sorting and processing data",
      symbol: "/hq/data_encoder.svg",
    },
    {
      id: "12",
      images: "/hq/hibest.webp",
      name: "Hibist Daniel",
      title: "Data Encoder",
      description: "Responsible for compiling, sorting and processing data",
      symbol: "/hq/data_encoder.svg",
    },
    {
      id: "13",
      images: "/hq/4B1A3324-Edit_o0mljh.jpg",
      name: "Naol Sori",
      title: "Technical support",
      description:
        "Naol provides technical support on HaHuJobs products to partners and clients that use our products",
      symbol: "/hq/data_encoder.svg",
    },
  ]);
  return {
    hqs: data,
  };
};
