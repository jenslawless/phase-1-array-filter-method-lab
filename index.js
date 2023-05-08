function findMatching(drivers, name) {
    const list = drivers.filter(function (n) {
        return n.toLowerCase() === name.toLowerCase();
    });
    return list;
};

function fuzzyMatch(drivers, name) {
    const list = drivers.filter(function (n) {
        return n.startsWith(name)
    });
    return list
}

function matchName(drivers, name) {
    const list = drivers.filter(function (n) {
        return n.name === name
    }
    )
    return list
}








