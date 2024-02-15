const fs = require("node:fs");

const deleteFile = () => {
  const respnose = fs.unlinkSync("sample.txt");
  console.log(respnose);
};

// deleteFile();

const readFile = (filePath) => {
  const data = fs.readFileSync(filePath);
  return data.toString();
};

const writeFile = (filePath, dataToWrite) => {
  const response = fs.writeFileSync(filePath, dataToWrite);
  return response;
};

const json = readFile("users.json");
const usersList = JSON.parse(json);
console.log(usersList);

const updatedUsersList = usersList.map((user) => {
  if (user.id === 3) {
    return {
      ...user,
      name: "John",
    };
  }
  return user;
});

console.log(updatedUsersList);
// writeFile("users.json", JSON.stringify(updatedUsersList));

