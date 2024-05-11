import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  chatInfo: {},
  renderChatInfor: false,
  messages: [],
  renderMessage: false,
  scrollEnd: false,
  messageCall: {}
}

// cấu trúc khi dispatch 
/**  
 * @param {chatInfo}
     const chatInfo = {
        user: {...response},
        roomId: props.room.roomId,
        room: props.room,
      };
  * @param {messages}
      const messages = [phần response của message khi fetch data]
*/

export const messageReducer = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setChatInfo: (state, action) => {
      state.chatInfo = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    pushMessage: (state, action) => {
      const index = state.messages.findIndex(msg => msg.id === action.payload.id);
      if(index !== -1) {
        state.messages[index] = action.payload;
      } else {
        state.messages = [ action.payload, ...state.messages ];
      }
    },
    updateMessage: (state, action) => {
      state.messages = [...state.messages, ...action.payload];
    },
    deleteMessage: (state, action) => {
      const index = action.payload;
      state.messages.splice(index, 1);
    },
    reRenderMessge: (state) => {
      state.renderMessage = !state.renderMessage;
    },
    setScrollEnd: (state) => {
      state.scrollEnd = !state.scrollEnd;
    },
    setMessageCall: (state, action) => {
      state.messageCall = action.payload;
    }, 
    reRenderChatInfor: (state) => {
      state.renderChatInfor = !state.renderChatInfor;
    }
  },
})

export const { 
  setChatInfo, 
  setMessages, 
  pushMessage, 
  updateMessage, 
  deleteMessage, 
  reRenderMessge, 
  setScrollEnd,
  setMessageCall,
  reRenderChatInfor 
} = messageReducer.actions

export default messageReducer.reducer