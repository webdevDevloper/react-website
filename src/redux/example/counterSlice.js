import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

const fetchUserById = createAsyncThunk(
	"users/fetchByIdStatus",
	async (userId, thunkAPI) => {
		//   const response = await userAPI.fetchById(userId)
		//   return response.data
	}
);

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(fetchUserById.fulfilled, (state, action) => {
			// Add user to the state array
			state.entities.push(action.payload);
		});
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
