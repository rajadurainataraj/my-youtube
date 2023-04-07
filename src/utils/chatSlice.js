import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({

    name: "chat",
    initialState: {
        liveChat: []
    },
    reducers: {
        message: (state, actions) => {
            if (state.liveChat.length > 5) {
                state.liveChat.splice(0, 1)
                state.liveChat.push(actions.payload)
            } else {
                state.liveChat.push(actions.payload)
            }    
        }     
}
})
export default chatSlice.reducer
export const {message} = chatSlice.actions