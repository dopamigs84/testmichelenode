const fs = require("fs");


const GetDatabase = () => {
    return JSON.parse(fs.readFileSync("./database.json").toString())
}

const SaveDatabase = () => {
    // TODO: da implementare
    fs.writeFileSync("./database.json", JSON.stringify(db))
}

const db = GetDatabase();

//SaveDatabase(db);

const GetTasks = () => {
    return db.tasks;
}

const GetTimeslices = () => {

    return []

}

const GetTimeslicesFor = (task_id) => {

    return []

}

module.exports = {
    GetTasks,
    GetTimeslices,
    GetTimeslicesFor
}