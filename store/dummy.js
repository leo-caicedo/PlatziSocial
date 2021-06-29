const db = {
    user: [
        { id: '1', name: "Leonardo" },
        { id: '2', name: "Said" },
        { id: '3', name: "Juana" },
    ],
};

async function list(tabla) {
    return db[tabla];
}

async function get(tabla, id) {
    let collection = await list(tabla);
    return collection.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data) {
    //
}

async function remove(tabla, id) {
    //
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
