import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class AdsService {
    async getAll(query = {}) {
        const res = await api.get('api/ads', { params: query })
        logger.log('[getAll', res.data.ads)
        AppState.ads = res.data.ads
    }

}

export const adsService = new AdsService()