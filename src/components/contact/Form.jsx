import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSurvey } from "../../context/surveyContext";

const Form = () => {
  const location = useLocation();
  const { surveyData } = useSurvey();

  // Pastikan data awal diambil dari location.state atau context
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    city: "",
    hasInsurance: "",
    insuranceDuration: "",
    insuranceCompany: "",
    topik: "",
    message: "",
  });

  // Jika surveyData atau location.state berubah, isi ulang form
  useEffect(() => {
    const stateData = location.state || {};
    const mergedData = { ...formData, ...surveyData, ...stateData };

    // pastikan tidak ada value undefined
    Object.keys(mergedData).forEach((key) => {
      if (mergedData[key] === undefined) mergedData[key] = "";
    });

    setFormData(mergedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [surveyData, location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Halo Albertwithpru, Saya ingin berkonsultasi
dengan Tujuan: ${formData.topik || "-"}

Berikut adalah informasi saya:

Nama: ${formData.name}
Email: ${formData.email}
No. Telp: ${formData.phone}
Tgl Lahir: ${formData.dob}
Domisili: ${formData.city}
Memiliki Polis Asuransi: ${formData.hasInsurance === "ya" ? "Ya" : "Tidak"}
${
  formData.hasInsurance === "ya"
    ? `Durasi: ${formData.insuranceDuration || "-"}\nAsuransi: ${
        formData.insuranceCompany || "-"
      }`
    : ""
}
Pesan: ${formData.message || "-"}

Terima kasih.
`;

    const url = `https://wa.me/6287883916216?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Formulir Data Diri
        </h2>

        {/* Nama */}
        <div>
          <label className="block mb-1 font-medium">Nama Lengkap</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>

        {/* No HP */}
        <div>
          <label className="block mb-1 font-medium">Nomor Telepon</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>

        {/* Tanggal Lahir */}
        <div>
          <label className="block mb-1 font-medium">Tanggal Lahir</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Kota Domisili */}
        <div>
          <label className="block mb-1 font-medium">Kota Domisili</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Sudah punya asuransi */}
        <div>
          <label className="block mb-2 font-medium">
            Apakah Anda sudah memiliki asuransi pribadi?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="hasInsurance"
                value="ya"
                checked={formData.hasInsurance === "ya"}
                onChange={handleChange}
              />
              <span>Ya</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="hasInsurance"
                value="tidak"
                checked={formData.hasInsurance === "tidak"}
                onChange={handleChange}
              />
              <span>Tidak</span>
            </label>
          </div>
        </div>

        {/* Jika punya asuransi */}
        {formData.hasInsurance === "ya" && (
          <>
            <div>
              <label className="block mb-2 font-medium">
                Sudah berapa tahun memiliki asuransi?
              </label>
              <select
                name="insuranceDuration"
                value={formData.insuranceDuration}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Pilih durasi</option>
                <option value="< 2 tahun">&lt; 2 tahun</option>
                <option value="2-5 tahun">2-5 tahun</option>
                <option value="> 5 tahun">&gt; 5 tahun</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Nama Perusahaan Asuransi
              </label>
              <select
                name="insuranceCompany"
                value={formData.insuranceCompany}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Pilih Asuransi</option>
                <option value="prudential">Prudential</option>
                <option value="allianz">Allianz</option>
                <option value="generali">Generali</option>
                <option value="zurich">Zurich</option>
                <option value="sunlife">Sun Life</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>
          </>
        )}

        {/* Tujuan / Topik */}
        <div>
          <label className="block mb-2 font-medium">Tujuan Anda</label>
          <select
            name="topik"
            value={formData.topik}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Pilih Tujuan</option>
            <option value="review polis asuransi">Review Polis Asuransi</option>
            <option value="berapa harga premi saya">Berapa Harga Premi Saya</option>
            <option value="tanya-tanya asuransi">Tanya-tanya Seputar Asuransi</option>
            <option value="bantuan klaim">Bantuan Klaim</option>
            <option value="saran/masukan">Saran / Masukan</option>
          </select>
        </div>

        {/* Pesan */}
        <div>
          <label className="block mb-1 font-medium">Pesan atau Pertanyaan</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 min-h-[100px]"
          />
        </div>

        {/* Tombol submit */}
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
        >
          Kirim via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default Form;
