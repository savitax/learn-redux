const initState = {
    name: "老八"
}
// eslint-disable-next-line
export default (state = initState, action) => {
    const { type, data } = action;
    switch (type) {
        case "login":
            return { ...state, name: data }
        default:
            return state
    }
}