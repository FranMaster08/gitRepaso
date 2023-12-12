const navigationController = {
  getHome: (req, res, next) => {
    res.render("index", { title: "Fran Generator" });
  },
  getPacho: (req, res, next) => {
    res.render("index", { title: "Controller Pacho 2" });
  },
  getPacho2: (req, res, next) => {
    res.render("index", { title: "Fran Generator" });
  },
};

module.exports = navigationController;
