export default function handler(req, res) {
  const { nama } = req.body;
  console.log('Pesanan masuk:', nama);
  res.status(200).json({ pesan: `Halo ${nama}, pesananmu kami terima.` });
}
