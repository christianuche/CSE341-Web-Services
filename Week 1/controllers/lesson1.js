//Lesson 1
const saluteRoute = (req, res) => {
    res.send("Hello, World!");
};

const professionalRoute = (req, res) => {
    res.send("Hello Professional World!");
};

const contactRoute = (req, res) => {
    res.send("Hello Contact World!");
};

module.exports = {
    saluteRoute,
    professionalRoute,
    contactRoute
};
