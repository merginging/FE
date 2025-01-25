import { createSlice } from '@reduxjs/toolkit';

// 로그인 상태 관리하는 Redux Slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false, // 초기 상태는 로그아웃
    },
    reducers: {
        setIsLoggedIn(state, action) {
        state.isLoggedIn = action.payload; // 로그인 상태 업데이트
        },
    },
});

export const { setIsLoggedIn } = authSlice.actions; // 액션 내보내기
export default authSlice.reducer; // 리듀서 내보내기
