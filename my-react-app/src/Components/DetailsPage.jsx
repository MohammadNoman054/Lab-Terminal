import {React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedCategory, setCategoryDetails} from '../app/emojiSlice';


 const DetailsPage = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(selectSelectedCategory);

  useEffect(() => {
    if (selectedCategory) {
      const fetchCategoryDetails = async () => {
        try {
          const response = await fetch(`https://github.com/cheatsnake/emojihub${selectedCategory.id}`);
          const data = await response.json();
          dispatch(setCategoryDetails(data));
        } catch (error) {
          console.error('Error!', error);
        }
      };

      fetchCategoryDetails();
    }
  }, [dispatch, selectedCategory]);

  const handleBackButtonClick = () => {
    window.location.href = '/';
};

  return (
    <div>
      <h1>Details Page</h1>
      {selectedCategory && (
        <div>
          <h2>{selectedCategory.name}</h2>
        </div>
      )}
      <button onClick={handleBackButtonClick}>Back</button>
    </div>
  );
};

export default DetailsPage;

