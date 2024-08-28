export type Feature = {
  img: any;
  icon: any;
  name: any;
  description: any;
  social: any;
};

const features: Feature[] = [
  {
    img: "/assets/images/image-1.jpg",
    icon: "/assets/icons/brand-framer.svg",
    name: "Lululemon-1",
    description: "Campaign Title Goes Here",
    social: [
      { icon: "/assets/icons/brand-facebook.svg", price: "$75" },
      { icon: "/assets/icons/brand-tiktok.svg", price: "$175" },
      { icon: "/assets/icons/brand-linkedin.svg", price: "$200" },
      { icon: "/assets/icons/brand-instagram.svg", price: "$300" },
      { icon: "/assets/icons/brand-x.svg", price: "$25" },
      { icon: "/assets/icons/brand-youtube.svg", price: "$20" },
    ],
  },
  {
    img: "/assets/images/image-2.jpg",
    icon: "/assets/icons/brand-framer.svg",
    name: "Lululemon-2",
    description: "Campaign Title Goes Here",
    social: [
      { icon: "/assets/icons/brand-facebook.svg", price: "$75" },
      { icon: "/assets/icons/brand-tiktok.svg", price: "$175" },
      { icon: "/assets/icons/brand-linkedin.svg", price: "$200" },
      { icon: "/assets/icons/brand-instagram.svg", price: "$300" },
      { icon: "/assets/icons/brand-x.svg", price: "$25" },
      { icon: "/assets/icons/brand-youtube.svg", price: "$20" },
    ],
  },
  {
    img: "/assets/images/image-3.jpg",
    icon: "/assets/icons/brand-framer.svg",
    name: "Lululemon-3",
    description: "Campaign Title Goes Here",
    social: [
      { icon: "/assets/icons/brand-facebook.svg", price: "$75" },
      { icon: "/assets/icons/brand-tiktok.svg", price: "$175" },
      { icon: "/assets/icons/brand-linkedin.svg", price: "$200" },
      { icon: "/assets/icons/brand-instagram.svg", price: "$300" },
      { icon: "/assets/icons/brand-x.svg", price: "$25" },
      { icon: "/assets/icons/brand-youtube.svg", price: "$20" },
    ],
  },
  {
    img: "/assets/images/image-4.jpg",
    icon: "/assets/icons/brand-framer.svg",
    name: "Lululemon-4",
    description: "Campaign Title Goes Here",
    social: [
      { icon: "/assets/icons/brand-facebook.svg", price: "$75" },
      { icon: "/assets/icons/brand-tiktok.svg", price: "$175" },
      { icon: "/assets/icons/brand-linkedin.svg", price: "$200" },
      { icon: "/assets/icons/brand-instagram.svg", price: "$300" },
      { icon: "/assets/icons/brand-x.svg", price: "$25" },
      { icon: "/assets/icons/brand-youtube.svg", price: "$20" },
    ],
  },
  {
    img: "/assets/images/image-5.jpg",
    icon: "/assets/icons/brand-framer.svg",
    name: "Lululemon-5",
    description: "Campaign Title Goes Here",
    social: [
      { icon: "/assets/icons/brand-facebook.svg", price: "$75" },
      { icon: "/assets/icons/brand-tiktok.svg", price: "$175" },
      { icon: "/assets/icons/brand-linkedin.svg", price: "$200" },
      { icon: "/assets/icons/brand-instagram.svg", price: "$300" },
      { icon: "/assets/icons/brand-x.svg", price: "$25" },
      { icon: "/assets/icons/brand-youtube.svg", price: "$20" },
    ],
  },
  {
    img: "/assets/images/image-6.jpg",
    icon: "/assets/icons/brand-framer.svg",
    name: "Lululemon-6",
    description: "Campaign Title Goes Here",
    social: [
      { icon: "/assets/icons/brand-facebook.svg", price: "$75" },
      { icon: "/assets/icons/brand-tiktok.svg", price: "$175" },
      { icon: "/assets/icons/brand-linkedin.svg", price: "$200" },
      { icon: "/assets/icons/brand-instagram.svg", price: "$300" },
      { icon: "/assets/icons/brand-x.svg", price: "$25" },
      { icon: "/assets/icons/brand-youtube.svg", price: "$20" },
    ],
  },
  {
    img: "/assets/images/image-1.jpg",
    icon: "/assets/icons/brand-framer.svg",
    name: "Lululemon-7",
    description: "Campaign Title Goes Here",
    social: [
      { icon: "/assets/icons/brand-facebook.svg", price: "$75" },
      { icon: "/assets/icons/brand-tiktok.svg", price: "$175" },
      { icon: "/assets/icons/brand-linkedin.svg", price: "$200" },
      { icon: "/assets/icons/brand-instagram.svg", price: "$300" },
      { icon: "/assets/icons/brand-x.svg", price: "$25" },
      { icon: "/assets/icons/brand-youtube.svg", price: "$20" },
    ],
  },
  {
    img: "/assets/images/image-2.jpg",
    icon: "/assets/icons/brand-framer.svg",
    name: "Lululemon-8",
    description: "Campaign Title Goes Here",
    social: [
      { icon: "/assets/icons/brand-facebook.svg", price: "$75" },
      { icon: "/assets/icons/brand-tiktok.svg", price: "$175" },
      { icon: "/assets/icons/brand-linkedin.svg", price: "$200" },
      { icon: "/assets/icons/brand-instagram.svg", price: "$300" },
      { icon: "/assets/icons/brand-x.svg", price: "$25" },
      { icon: "/assets/icons/brand-youtube.svg", price: "$20" },
    ],
  },
];

const GET = () => {
  return Response.json(features);
};

export { GET };
