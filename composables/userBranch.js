import { ref } from "vue";
export const useBranch = () => {
  const data = ref([
    {
      id: "1",
      title: "Bahir Dar",
      phone: "+251-5-85-56-67-77",
    },
    {
      id: "2",
      title: "Bole lemi",
      phone: "+251-1-18-60-07-66",
    },
    {
      id: "3",
      title: "Adama",
      phone: "+251-2-22-12-92-51",
    },
    {
      id: "4",
      title: "Debire Birhan",
      phone: "+251-1-16-73-11-20",
    },
    {
      id: "5",
      title: "Dire Dawa",
      phone: "+251-2-58-90-90-18",
    },
    {
      id: "6",
      title: "Kombolcha",
      phone: "+251-3-33-51-64-35",
    },
    {
      id: "7",
      title: "Hawassa",
      phone: "+251-4-68-21-23-37",
    },
  ]);
  return {
    branchcontact: data,
  };
};
