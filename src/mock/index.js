const Mock = require('mockjs')
const user = require('./user')

const mocks = [
    ...user
]

function MockHXR() {
    Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send

    Mock.XHR.prototype.send = function() {
        this.proxy_send(...arguments)
    }

    function XHRToExpressRequest(response) {
        return function(option) {
            let result = null

            if (response instanceof Function) {
                const { body, type, url } = option

                result = response({
                    method: type,
                    body: JSON.parse(body),
                    query: url,
                })
            } else {
                result = response
            }

            return Mock.mock(result)
        }
    }

    for (const item of mocks) {
        Mock.mock(new RegExp(item.url), item.type || 'get', XHRToExpressRequest(item.response))
    }
}

module.exports = {
    mocks,
    MockHXR
}