import { ref } from "vue";
export const useBloglecture = () => {
  const data = ref([
    {
      id: "1",
      title:
        "HaHuMuya Public Lecture Series: “Composition in Digital Art with AST. Professor Mezgebu Tesema”",
      type: "HaHuJobs News",
      date: "21 June 2025",
      text1:
        "On June 21, the HaHuMuya public lecture returned for its second installment, this time immersing participants with an art themed lecture. The second lecture was held once again at the vibrant ALX’s Lideta Capstone Tech Hub. The event welcomed AST. Professor Mezgebu Tesema, a renowned Ethiopian contemporary artist known for his striking realism, to lead the lecture titled ‘Composition in Digital Art’.",
      text2:
        "The lecture was kicked off by the opening remarks from HaHuJobs setting the tone for an inspiring afternoon. This was followed by ALX Ethiopia’s Country Director, Mirafe Gebriel Marcos, who shared a compelling overview of the HaHuMuya and ALX’s Lecture Series—highlighting its vision, goals, and what participants can expect in the coming sessions before warmly welcoming AST. Professor Mezgebu Tesema to the stage.",
      text3:
        "Professor Mezgebu’s lecture focused on the role of composition in digital art—highlighting how balance, depth, color, and perspective come together to create compelling visuals. From practicing artists to art lovers, the room was filled with creative energy and curiosity yearning to learn and know more.",
      text4:
        "Following the insightful session, participants enjoyed a refreshment break, providing a chance to network and connect. Attendees also engaged in a collaborative activity by leaving their creative marks on a public canvas—an interactive tribute to the day's theme of composition.",
      text5:
        "After a brief address by HaHuJobs’ CEO Kaleab Mezgebu, the event resumed with a dynamic Q&A session, where curious participants asked both personal and lecture-related questions. Professor Mezgebu responded with thoughtful reflections, sparking deeper discussions around artistry, painting and its digital evolution.",
      text6:
        "The event concluded with heartfelt closing remarks from HaHuJobs’ CEO, Kaleab Mezgebu—who is also the son of Professor Mezgebu—followed by a vibrant group photo capturing the connections and creativity shared throughout the afternoon.",
      text7:
        "The second HaHuMuya Public Lecture was more than a lecture—it was a space for learning, connection, and creativity. As the series continues, HaHuMuya will keep bringing people together to learn, grow, and get inspired. This event was made possible by the collective effort of HaHuMuya and ALX Ethiopia’s team.",

      images1: "/blogdetail/photo3.jpeg",
      images2: "/blogdetail/photo4.jpeg",
      images3: "/hahujobnews/photo8.jpeg",
      images4: "/blogdetail/photo6.jpeg",
      images5: "/blogdetail/photo5.jpeg",
      images6: "/blogdetail/photo9.jpeg",
      images7: "/blogdetail/photo6 (1).jpeg",
    },
  ]);
  return {
    lectureSeries: data,
  };
};
