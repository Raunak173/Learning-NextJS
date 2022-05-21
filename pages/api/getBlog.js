import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "No such blog exists!" });
    }
    res.status(200).json(JSON.parse(data));
    //Hit this API http://localhost:3000/api/getBlog?slug=how-to-learn-js
  });
}
