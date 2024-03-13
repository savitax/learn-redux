const initialState = {
    user: "000"
};
function testReducer(state = initialState, action) {
    switch (action.type) {
        case 'Login_Action':
            // 处理action
            return {
                ...state,
                // 更新部分state
                user: action.payload
            };
        default:
            return state;
    }
}
export default testReducer;