// import "./styles/categories.styles.scss";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Skirt",
      imageUrl:
        "https://img.freepik.com/free-photo/pretty-smiling-woman-walking-city-street-stylish-printed-skirt-denim-oversize-jacket-wearing-pink-sunglasses-summer-style-trend_285396-2838.jpg?size=626&ext=jpg&ga=GA1.1.1253114453.1683708487&semt=ais",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl:
        "https://img.freepik.com/free-photo/photo-woman-looking-away-black-leather-jacket-cap_114579-59398.jpg?size=626&ext=jpg&ga=GA1.2.1253114453.1683708487&semt=ais",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl:
        "https://img.freepik.com/premium-photo/woman-stylish-gumshoes-light-blue-background-closeup_495423-55815.jpg?size=626&ext=jpg&ga=GA1.1.1253114453.1683708487&semt=ais",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl:
        "https://img.freepik.com/free-photo/elegant-pale-girl-wih-bright-pink-lips-plays-with-short-curly-hair_197531-7057.jpg?w=1380&t=st=1683708605~exp=1683709205~hmac=7ac457736d05eec443c3b97dd7c2ef884ed9bcae07060649f4a684a6b1778bf2",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl:
        "https://img.freepik.com/free-photo/black-boy-posing-with-blue-light_23-2148171774.jpg?size=626&ext=jpg&ga=GA1.2.1253114453.1683708487&semt=ais",
    },
  ];

  return (
    <>
      <Directory categories={categories}  />
    </>
  );
};

export default Home;