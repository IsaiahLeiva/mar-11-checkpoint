import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class PostsService {
    async getAll(query = {}) {
        const res = await api.get('api/posts', { params: query })
        logger.log('[getAll', res.data)
        AppState.posts = res.data.posts
        // NOTE check your Vue tools whenever you press this button, and see what we're getting these set to in our AppState
        AppState.nextPage = res.data.older
        AppState.olderPosts = res.data.newer
    }

    async getById(id) {
        const res = await api.get('api/posts/' + id)
        logger.log('[getById]', res.data)
        AppState.activePost = res.data
    }

    async changePage(page) {
        const res = await api.get(page)
        logger.log(res.data)
        AppState.posts = res.data.posts
        // NOTE these need to match what's on lines 12 and 13
        AppState.nextPage = res.data.next
        AppState.olderPosts = res.data.older
    }

    async createPost(data) {
        const res = await api.post('api/posts', data)
        logger.log('[createPost]', res.data)
        AppState.posts = [res.data, ...AppState.posts]
    }

    async editPost(id, data) {
        const res = await api.put('api/posts/' + id, data)
        logger.log('[editPost]', res.data)
        AppState.activePost = res.data
    }

    async deletePost(id) {
        const res = await api.delete('api/posts/' + id)
        logger.log('[deletePost]', res.data)
        AppState.posts = AppState.posts.filter(p => p.id != id)
    }


}

export const postsService = new PostsService()