import request from '@/utils/request'

export function getAllUser(query = '') {
    return request({
        url: `/users/${query}`,
        type: 'GET',
    })
}

export function deleteUser(id) {
    return request({
        url: `/users/${id}`,
        type: 'DELETE',
    })
}
