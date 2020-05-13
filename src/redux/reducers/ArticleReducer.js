import { ARTICLEDATA } from "../constants";

function articleData(state={},action) {
    switch (action.type) {
        case ARTICLEDATA.ADD_ARTICLE: {
            let {id,content,date,tag} = action
            return {id,content,date,tag}
        }
        default:
            return state
    }
}

export function articleDatas(state=[],action) {
    switch (action.type) {
        case ARTICLEDATA.ADD_ARTICLE: {
            return [...state,articleData({},action)]
        }
        case ARTICLEDATA.DEL_ARTICLE: {
            return state.filter((data) => data['id'] !== action.id)
        }
        case ARTICLEDATA.LOADING_ARTICLE: {
            return [...state,...action.articleDatas]
        }
        default:
            return state
    }
}