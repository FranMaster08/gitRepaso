const navigationController = {
  getHome: (req, res, next) => {
    res.render("index", { title: "Fran Generator" });
  },
  getPacho: (req, res, next) => {
    res.render("index", { title: "Fran Generator" });
  },
  getEnoc: (req, res, next) => {
    res.render("index", { title: "Fran Generator" });
  },
};

module.exports = navigationController;
