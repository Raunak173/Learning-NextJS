// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "Raunak Agarwal" });
// }

import * as fs from "fs";

export default function handler(req, res) {
  //Reading a json file.
  fs.readFile("blogdata/how-to-learn-js.json", "utf-8", (err, data) => {
    //I t will give a string. We need to convert it into object.
    res.status(200).json(JSON.parse(data));
  });
}
