const navigationController = {
  getData: async (req, res, next) => {
    res.send("Hola mundo");
  },
  getEnoc: (req, res, next) => {
    res.render("index", { title: "Enoc Generator 1" });
  },

  getEnoc2: (req, res, next) => {
    res.render("index", { title: "Enoc Generator 2" });
  },
};

module.exports = navigationController;
