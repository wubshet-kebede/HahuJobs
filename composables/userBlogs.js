import { ref } from "vue";
export const useBlogs = () => {
  const data = ref([
    {
      id: "1",
      images: "/images/photo8.jpeg",
      link: "/blogs/Hahu_Muya_Public_Lecture_Series",
      title: "Events & Lectures",
      date: "21 june 2025",
      text: "Composition in Digital Art with AST. Professor Mezgebu Tesema",
    },
    {
      id: "2",
      images: "/images/photo5.jpeg",
      link: "/blogs/Celebrating_Progress_The_STEEP_Project_Workshop",
      title: "HaHuJobs News",
      date: "5 june 2025",
      text: "Celebrating Progress: The STEEP Project Workshop",
    },
    {
      id: "3",
      images: "/images/photo5 (2).jpeg",
      link: "/blogs/A_Day_of_Empowerment_and_Exploration",
      title: "HaHuJobs News",
      date: "24 May 2025",
      text: "STEM Career Fair at Dejazmach Wondyirad High School",
    },
    {
      id: "4",
      images: "/images/photo5 (1).jpeg",
      link: "/blogs/Hahu_Muya_Public_lecture_Series_Debut ",
      title: "Events & Lectures",
      date: "10 May 2025",
      text: "Hahu Muya Public Lecture Series Debut: A Raw, Inspiring Dive into Ethiopia’s Tech Frontier",
    },
    {
      id: "5",
      images: "/images/photo2.jpeg",
      link: "/blogs/Empowering_the_Next_Generation",
      title: "HaHuJobs News",
      date: "2 May 2025",
      text: "Empowering the Next Generation: The Launch of the STEEP Champions Network",
    },
    {
      id: "6",
      images: "/images/steep_kokebe_thumbinail_image.jpg",
      link: "/blogs/steem_career_fair_at_kokebe_tsibah_high_school",
      title: "HaHuJobs News",
      date: "29 March 2025",
      text: "A Day of Inspiration and Discovery: STEM Career Fair at Kokebe Tsibah High School",
    },
  ]);
  return {
    blogs: data,
  };
};
