import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class PostsService {
    async getAll(query = {}) {
        const res = await api.get('api/posts', { params: query })
        logger.log('[getAll', res.data.posts)
        AppState.posts = res.data.posts
    }

    //NOTE: Don't forget to add the rest of the methods here
    // async getById(id) {
    //     const res = await api.get
    // }


}

export const postsService = new PostsService()