
import request from '../utils/request'
import { ApiBase } from '../utils/config'

export default {
    userData(){
        return request(ApiBase.localIp + `/user`);
    },
}