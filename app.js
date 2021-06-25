const express = require("express");
const app = express();
const port = 3001;
app.use(express.json())

app.post("/api/transacciones", (req, res) => {
  console.log(req.body)
  res.status(200).json({"FIDEMPRESA": "CCSCON04",
  "BANCO02": "0171",
  "FECHA02": "20200715",
  "REFER02": "000000000000",
  "IDENT02": "000000000000000",
  "TELEE02": "00584242972544",
  "TELER02": "00584120109506",
  "MONTO02": "38000",
  "FLOCATOR": "123454",
  "CODRE02": "10",
  "TIMESTAM": "2020-07-21:19:26:56",
  "STATU02": "N"
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
