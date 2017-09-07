module.exports = {
  dbURI: 'mongodb://josh11:josh11@ds133162.mlab.com:33162/heroku_tl016m5d',
  port: process.env.PORT || 3899,
  host: process.env.HOST || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};
