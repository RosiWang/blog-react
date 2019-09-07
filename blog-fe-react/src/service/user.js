
import request from '../utils/request'
import { ApiBase } from '../utils/config'

export default {
    user() {
        return request(ApiBase.server + '/user');
    },
    login(data) {
        return request(ApiBase.local + `/login`, {
            method: 'POST',
            body: data,
            withCredentials:true
        });
    }

}