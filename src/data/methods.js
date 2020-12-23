module.exports = {
    init: require('./init'),
    member: {
        count: require('./queries/member/count'),
        insert: require('./queries/member/insert'),
        select: require('./queries/member/select'),
        delete: require('./queries/member/delete'),
        update: require('./queries/member/update'),
        all: require('./queries/member/all')
    }
}