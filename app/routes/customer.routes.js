module.exports = app => {
  const customers = require("../controllers/customer.controller.js");




  app.get("/all", customers.findAll);

  app.put("/nor/update/last/:customerId20", customers.last_update_gc_acc);
  app.get("/nor/account/last_active/:customerId30", customers.get_last_update_gc_acc);

  app.put("/van/update/last/:customerId40", customers.last_update_gc_acc_van);
  app.get("/van/account/last_active/:customerId50", customers.get_last_update_gc_acc_van);


  //////////////////////////////  GOOGLE  //////////////////////////////////////////
  app.get("/nor/account/active", customers.get_active_google);
  app.get("/van/account/active", customers.get_active_google_van);

  //////////////////////////////////////////////////////////////////////////////////
  app.put("/nor/account/update/:customerId4", customers.update_gc_acc);
  app.put("/van/account/update/:customerId6", customers.update_gc_acc_van);

//////////////////////////////////////////////////////////////////////////////////

  app.put("/nor/account/act/:customerId5", customers.active_gc_acc);
  app.put("/van/account/act/:customerId8", customers.active_gc_acc_van);

//////////////////////////////////////////////////////////////////////////////////

  app.get("/google_account/active", customers.get_active_google);
  app.get("/google_account_van/active", customers.get_active_google_van);
//////////////////////////////////////////////////////////////////////////////////
  app.put("/google_account/update/:customerId4", customers.update_gc_acc);
  app.put("/google_account/update_van/:customerId6", customers.update_gc_acc_van);

  app.put("/google_account/activate/:customerId5", customers.active_gc_acc);
  app.put("/google_account/activate_van/:customerId8", customers.active_gc_acc_van);


  //////////////////////////////////////////////////////////////////////////////////

    // GET RANDOM CONFIG
  app.get("/pure/ran", customers.get_random_pure);
  // SELECT COUNT(*) FROM product_details;

    //COUNT LEFT CONFIG
  app.get("/pure/count", customers.config_left_pure);


   // Retrieve a single Customer with customerId
  app.get("/pure/:customerId11", customers.findOne_pure);

  app.put("/pure/update/:customerId10", customers.update_pure);


  //Reset all Config set used=y
  app.put("/pure/reset_all", customers.reset_all_pure);


  /////////////////////////////////////////////////////////////////////////////////
  // GET RANDOM CONFIG
  app.get("/van/ran", customers.get_random_van);
  // SELECT COUNT(*) FROM product_details;

  //COUNT LEFT CONFIG
  app.get("/van/count", customers.config_left_van);

  // Retrieve a single Customer with customerId
  app.get("/van/:customerId3", customers.findOne_van);

  //update VANISH CONFIG
  app.put("/van/update/:customerId3", customers.update_van);

  //Reset all Config set used=y
  app.put("/van/reset_all", customers.reset_all_van);
  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  // GET RANDOM CONFIG
  app.get("/nor/ran", customers.get_random);
  // SELECT COUNT(*) FROM product_details;

  //COUNT LEFT CONFIG
  app.get("/nor/count", customers.config_left);

  // Retrieve a single Customer with customerId
  app.get("/nor/:customerId2", customers.findOne_nord);

  //COUNT LEFT CONFIG
  app.put("/nor/update/:customerId", customers.update_nord);

  //Reset all Config set used=y
  app.put("/nor/reset_all", customers.reset_all_nord);
  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  // Create a new Customer
  app.post("/customers", customers.create);

  // Retrieve all Customers
  app.get("/customers", customers.findAll);

  // Retrieve a single Customer with customerId
  app.get("/customers/:customerId", customers.findOne);


  // Update a Customer with customerId
  app.put("/customers/:customerId", customers.update);

  // Delete a Customer with customerId
  app.delete("/customers/:customerId", customers.delete);

  // Create a new Customer
  app.delete("/customers", customers.deleteAll);
};
