import { ref } from "vue";
export const useContact = () => {
  const data = ref([
    {
      id: "1",
      iconName: "mi:location",
      title: "Office adress",
      add1: "  Bole, Behind DH-GEDA tower",
      add2: " Afomi Building 3rd floor",
      add3: "  Addis Ababa",
    },
    {
      id: "2",
      iconName: "mage:phone-call",
      title: " Phone Number",
      phone1: " +251-988-00-77-05",
      phone2: " +251-988-00-77-73",
      phone3: "+251-988-00-77-75",
    },
    {
      id: "3",
      iconName: "line-md:email-opened",
      title: " Email address",
      email: " info@hahu.jobs",
    },
  ]);
  return {
    contacts: data,
  };
};
