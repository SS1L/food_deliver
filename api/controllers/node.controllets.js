const hello = async(req, res) => {
    try {
        res.json('All work');
    } catch(e) {
        console.log(e);
    }
}

module.exports = {hello}