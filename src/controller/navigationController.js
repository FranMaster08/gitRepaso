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
  getEnoc: (req, res, next) => {
    res.render("index", { title: "Enoc Generator 1" });
  },

  getEnoc2: (req, res, next) => {
    res.render("index", { title: "Enoc Generator 2" });
  },
};

module.exports = navigationController;
