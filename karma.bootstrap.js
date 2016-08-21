window.__karma__.loaded = function() {
  System.main = 'test/';

  steal.done().then(function(){
    if(window.__karma__) {
      window.__karma__.start();
    }
  });
};
