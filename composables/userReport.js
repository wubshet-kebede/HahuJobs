import { ref } from "vue";
export const useReport = () => {
  const data = ref([
    {
      id: "1",
      link: "/reports/Monthly_Job_Post_from_May_01_31_2025",
      image: "/yout/may012025.avif",
      title: "Monthly Job Post from May 01-31, 2025",
      type: "Monthly",
      date: "1 Jun 2025",
      text: "In May of 2025, we published 3,351 vacancies in all our outlets. This in comparison with April of 2025, showed an 18% increase. Among the vacancies posted in May, the business sector led with 25%, and engineering followed with 19%. The finance sector vacancies stood 3rd with an 18% share. In May, two years of working experience was the most in-demand with 678 vacancies requiring so.",
    },
    {
      id: "2",
      link: "/reports/Line_graph_comparison_of_Entry_Mid_and_Senior_level_vacancies_between_the_years_July_2019_and_Nov_2022",
      youtube:
        "https://www.youtube.com/embed/HpMk_ljC-2M?loop=1&amp;modestbranding=1",
      title:
        "Line graph comparison of Entry, Mid and Senior level vacancies between the years July 2019 and Nov 2022",
      type: "Annually",
      date: "25 November 2022",
      text: "Here is a line chart race among entry, mid and senior level of over 60k vacancies aggregated between July 2019 and November 2022. There is an average gap of 10% (of the total opportunities around which is around 6,000 positions) between entry and mid level vacancies categorized by the years of experience they require while the qualification difference between a professional with 1 to 2 years experienced and entry level one can easily be bridged through specialized technical and soft skill trainings. Hence a clear indicator that if one is looking for an entry level job enrolling to a training program could noticeably increase the chance of him or her getting one.",
    },
    {
      id: "3",
      link: "/reports/Monthly_Job_Post_from_April_01_30_2025",
      image: "/yout/apr012025.avif",
      title: "Monthly Job Post from April 01-30, 2025",
      type: "Monthly",
      date: "1 May 2025",
      text: "In April of 2025, we published 2,844 vacancies in all our outlets. This in comparison with March of 2025, showed a 15.63% decrease. Among the vacancies posted in April, the business sector led with 26%, and engineering followed with 19%. The finance sector vacancies stood 3rd with a 16% share. In April, two years of working experience was the most in-demand with 600 vacancies requiring so.",
    },
  ]);
  return {
    reports: data,
  };
};
