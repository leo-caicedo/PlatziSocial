const db = {
    user: [{ id: 1, name: "Leonardo" }],
};

function list(tabla) {
    return db[tabla];
}

function get(tabla, id) {
    let collection = list(tabla);
    return collection.filter(item => item.id === id)[0] || null;
}

function upsert(tabla, data) {
    //
}

function remove(tabla, id) {
    //
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
