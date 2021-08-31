const users = [
    {
        id: 1,
        roles: ['admin'],
        name: 'Supper Admin',
        bio: 'Me is administrator',
    },
    {
        id: 2,
        roles: ['editor'],
        name: 'Editor user',
        bio: 'Me is editor',
    },
]

for (let i = 0; i <= 47; i++) {
    users.push({
        id: '@increment',
        name: '@first',
        bio: null,
        roles: ['member'],
    })
}

module.exports = [
    // List all user
    {
        url: 'suntech.mock/user',
        type: 'post',
        response: config => {

            return {
                code: 200,
                status: true,
                data: users
            }
        }
    }
]