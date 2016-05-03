function createResponse(payload, meta, status) {
  return {
    payload: payload || {},
    meta: meta || {},
    status: status || 'ok'
  }
}

module.exports = {
  createResponse: createResponse
};