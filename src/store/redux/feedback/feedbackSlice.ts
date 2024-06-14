import {createSlice} from "@reduxjs/toolkit";
import {FeedbackSliceState} from "./types";


const feedbackInitialState: FeedbackSliceState = {
    likeCount: 0,
    dislikeCount: 0


}


export const feedbackSlice = createSlice({

    name: `FEEDBACK`,
    initialState: feedbackInitialState,
    reducers: create => ({

        addLike: create.reducer((state: FeedbackSliceState) => {
            state.likeCount = state.likeCount + 1
        }),
        addDisLike: create.reducer((state: FeedbackSliceState) => {
            state.dislikeCount = state.dislikeCount + 1
        }),
//1 cg
//         resetResult: create.reducer((state: FeedbackSliceState) => {
//
//             state.likeCount = 0
//             state.dislikeCount = 0
//
//
//         })
        resetResult: create.reducer(()=>feedbackInitialState)

    }),
    selectors:{
        like:(state:FeedbackSliceState)=>state.likeCount,
        dislike:(state:FeedbackSliceState)=>state.dislikeCount
    }


})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors