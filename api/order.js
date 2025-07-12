export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, menu, phone } = req.body;

    if (!name || !menu || !phone) {
      return res.status(400).json({ message: "Data tidak lengkap." });
    }

    console.log("Pesanan Baru:", { name, menu, phone });

    return res.status(200).json({ message: "Pesanan berhasil dikirim!" });
  }

  res.status(405).json({ message: "Method not allowed" });
}
