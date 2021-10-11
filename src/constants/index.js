import { FaGraduationCap } from "react-icons/fa";
import { RiMentalHealthFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";

export const categories = [
  {
    id: 1,
    title: "Education",
    icon: <FaGraduationCap />,
    color: "#0000FF",
  },
  {
    id: 2,
    title: "Healthcare",
    icon: <RiMentalHealthFill />,
    color: "00cd00",
  },
  {
    id: 3,
    title: "Food",
    icon: <IoFastFoodOutline />,
    color: "#ffb80e",
  },
  {
    id: 4,
    title: "Shopping",
    icon: <AiOutlineShoppingCart />,
    color: "#E33054",
  },
  {
    id: 5,
    title: "other",
    icon: <BsChatDots />,
    color: "#ff611d",
  },
];
