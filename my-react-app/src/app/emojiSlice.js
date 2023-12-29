import { createSlice } from '@reduxjs/toolkit';

const emojiSlice = createSlice({
    name: 'emoji',
    initialState: {
        categoriesOfEmoji: [],
        selectedCategory: null,
        categoryDetails: null,
    },
    reducers: {
        setCategoriesOfEmoji: (state, action) => {
            state.categoriesOfEmoji = action.payload;
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setCategoryDetails: (state, action) => {
            state.categoryDetails = action.payload;
        },
    },
});

export const { setCategoriesOfEmoji, setSelectedCategory, setCategoryDetails } = emojiSlice.actions;
export const selectCategories = (state) => state.emoji.categoriesOfEmoji;
export const selectSelectedCategory = (state) => state.emoji.selectedCategory;
export const selectCategoryDetails = (state) => state.emoji.categoryDetails;
export default emojiSlice.reducer;
