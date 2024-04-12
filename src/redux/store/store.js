import { configureStore } from '@reduxjs/toolkit';
import messageReducer from '../reducers/messageReducer';
import chatReducer from '../reducers/chatReducer';
import renderReducer from '../reducers/renderReducer';
import renderRoom from '../reducers/renderRoom';
import userReducer from '../reducers/userReducer';
import renderLayoutReducer from '../reducers/renderLayoutReducer';
import friendReducer from '../reducers/friendReducer';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    chat: chatReducer,
    render: renderReducer,
    room: renderRoom,
    userInfo: userReducer,
    renderView: renderLayoutReducer,
    friend: friendReducer
  },
})