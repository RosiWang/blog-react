
import request from '../utils/request'
import { ApiBase } from '../utils/config'

export default {
    diary() {
        return request(ApiBase.server + '/diary');
    },
    addDiary(data) {
        return request(ApiBase.server + `/addDiary`, {
            method: 'POST',
            body: data
        });
    },
    deleteDiary(id) {
        return request(ApiBase.server + `/deleteDiary`, {
            method: 'DELETE',
            body: { id }
        });
    },
    updateDiary(data) {
        return request(ApiBase.server + '/updateDiary', {
            method: 'PUT',
            body: data
        })
    }
}