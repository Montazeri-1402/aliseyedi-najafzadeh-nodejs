function sayhi(parsedUrl) {
    let name = parsedUrl.query.name;
    if (name) {
        return (`hello ${name}`);
    } else {
        return ('please enter a name');
    }
}

module.exports.sayhi = sayhi;
