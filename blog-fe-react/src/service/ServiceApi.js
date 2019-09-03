
import request from '../utils/request'
import { ApiBase } from '../utils/config'

export default {
    userData() {
        return request(ApiBase.localIp + `/user`);
    },
    addDiary(data) {
        return request(ApiBase.localIp + `/addDiary`, {
            method: 'POST',
            body: data
        });
    },
    diary() {
        return request(ApiBase.localIp + '/diary');
    }
}