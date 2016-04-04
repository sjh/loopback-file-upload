module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('user', function(err) {
    if (err) throw err;

    app.models.user.create([
      {username: 'admin', password: 'admin', email: 'admin@sample.org'},
    ], function(err, uploader) {
      if (err) throw err;

      console.log('Models created: \n', uploader);
    });
  });

};
