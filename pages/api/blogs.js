// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "Raunak Agarwal" });
// }

import * as fs from "fs";

// export default function handler(req, res) {
//   //Reading a json file.
//   fs.readFile("blogdata/how-to-learn-js.json", "utf-8", (err, data) => {
//     //I t will give a string. We need to convert it into object.
//     res.status(200).json(JSON.parse(data));
//   });
// }

export default async function handler(req, res) {
  //http://localhost:3000/api/blogs
  let myfile;
  let allblogs = [];
  let data = await fs.promises.readdir("blogdata");
  for (let index = 0; index < data.length; index++) {
    let item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    //console.log(myfile);
    allblogs.push(JSON.parse(myfile)); //convert string to obj
  }
  res.status(200).json(allblogs);
}
