module.exports = {
    "/api/contact/*": {
        "target": "http://localhost:8001"
      },
      "/wp-json/*": {
        "target": "http://localhost:8000"
      }
}