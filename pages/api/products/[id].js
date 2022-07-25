
export default function handler(req, res) {
    console.log(req.method);
    res.status(200).json(`getting one product with id ${req.query.id}`);
  }