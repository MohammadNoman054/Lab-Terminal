import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories, setCategoriesOfEmoji, setSelectedCategory} from "../app/emojiSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://github.com/cheatsnake/emojihub");
        const data = await response.json();
        dispatch(setCategoriesOfEmoji(data));
      } catch (error) {
        console.error("Error! ", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
