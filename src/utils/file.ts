import fs from 'fs';


export const store = (data, filePath) => {
    if (!data) throw new Error("Data undefined")
    fs.writeFileSync(filePath, JSON.stringify(data))
}

export const retrive = (filePath) => {
    return fs.readFileSync(filePath, 'utf8')
}

export const deleteFile = (filePath) => {
    return fs.unlink(filePath, (err) => {
        if(err) console.log(`Could not delete the file err ${err}`);
        console.log(`${filePath} is successfully deleted.`)
    });
}