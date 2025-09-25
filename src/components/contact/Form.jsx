import { useState } from "react";

const telegramSVG = (
  <svg
    className="w-4 md:w-6 aspect-square"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.34 9.32013L6.34 2.32013C5.78749 2.04514 5.16362 1.94724 4.55344 2.03978C3.94326 2.13232 3.37646 2.4108 2.93033 2.83724C2.48421 3.26369 2.18046 3.81735 2.0605 4.42274C1.94054 5.02813 2.0102 5.65578 2.26 6.22013L4.66 11.5901C4.71446 11.72 4.74251 11.8593 4.74251 12.0001C4.74251 12.1409 4.71446 12.2803 4.66 12.4101L2.26 17.7801C2.0567 18.2368 1.97076 18.7371 2.00998 19.2355C2.0492 19.7339 2.21235 20.2145 2.48459 20.6338C2.75682 21.0531 3.12953 21.3977 3.56883 21.6363C4.00812 21.875 4.50009 22 5 22.0001C5.46823 21.9955 5.92949 21.8861 6.35 21.6801L20.35 14.6801C20.8466 14.4303 21.264 14.0474 21.5557 13.5742C21.8474 13.101 22.0018 12.556 22.0018 12.0001C22.0018 11.4442 21.8474 10.8993 21.5557 10.4261C21.264 9.95282 20.8466 9.56994 20.35 9.32013H20.34ZM19.45 12.8901L5.45 19.8901C5.26617 19.9784 5.05973 20.0084 4.85839 19.976C4.65705 19.9436 4.47041 19.8504 4.32352 19.709C4.17662 19.5675 4.07648 19.3845 4.03653 19.1846C3.99658 18.9846 4.01873 18.7772 4.1 18.5901L6.49 13.2201C6.52094 13.1484 6.54766 13.075 6.57 13.0001H13.46C13.7252 13.0001 13.9796 12.8948 14.1671 12.7072C14.3546 12.5197 14.46 12.2653 14.46 12.0001C14.46 11.7349 14.3546 11.4806 14.1671 11.293C13.9796 11.1055 13.7252 11.0001 13.46 11.0001H6.57C6.54766 10.9253 6.52094 10.8518 6.49 10.7801L4.1 5.41013C4.01873 5.22309 3.99658 5.01568 4.03653 4.8157C4.07648 4.61572 4.17662 4.43273 4.32352 4.29128C4.47041 4.14982 4.65705 4.05666 4.85839 4.02428C5.05973 3.9919 5.26617 4.02186 5.45 4.11013L19.45 11.1101C19.6138 11.194 19.7513 11.3215 19.8473 11.4786C19.9433 11.6356 19.994 11.8161 19.994 12.0001C19.994 12.1842 19.9433 12.3647 19.8473 12.5217C19.7513 12.6787 19.6138 12.8062 19.45 12.8901Z"
      fill="white"
    />
  </svg>
);

const commonClass =
  "input input-lg border-0 border-b-2 focus:outline-none focus:placeholder:text-picto-primary placeholder:text-[15px] md:placeholder:text-lg focus:border-picto-primary border-[#E6E8EB] w-full rounded-none px-0";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    city: "",
    message: "",
  });

    const opsiPertanyaan = [
      {value: "review polis asuransi",
        label: "Bantu Review Polis Asuransi"
      },
      {value: "berapa harga premi saya",
        label: "Berapa Harga Premi Saya"
      },
      {
        value: "berapa harga premi anggota keluarga saya",
        label: "Berapa Harga Premi Anggota Keluarga Saya"
      },
      {value: "tanya-tanya asuransi",
        label: "Tanya-tanya seputar asuransi"
      },
      {value: "lainnya",
        label: "Lainnya"
      },
    ]

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Halo Albertwithpru, Saya ingin berkonsultansi dengan Anda!
dengan Tujuan: ${form.topik}

Berikut adalah informasi saya:

Nama: ${form.name}
Email: ${form.email}
No. Telp: ${form.phone}
Tgl Lahir: ${form.dob}
Domisili: ${form.city}
Punya Polis Asuransi: ${form.hasInsurance === "ya" ? "Ya" : "Tidak"}
${form.hasInsurance === "ya" ? `Asuransi: ${form.insuranceCompany}` : ""}

Pesan: ${form.message}

Terima kasih.
`;

    const url = `https://wa.me/6287883916216?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank"); // buka di tab baru
  };

  return (
    <div>
      <p className="text-[12px] xs:text-[14px] max-lg:text-center sm:text-lg font-normal text-soft-dark">
        Mohon isi form berikut, saya akan menghubungi Anda secepatnya.
      </p>
      <span className="text-xs text-gray-500">
        *Data Anda 100% aman dan tidak akan dibagikan ke pihak manapun.{" "}
      </span>
      <div className="mx-2">
        <form className="flex flex-col gap-1 mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nama"
            className={commonClass}
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={commonClass}
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="No.telp"
            className={commonClass}
            value={form.phone}
            onChange={handleChange}
            required
          />

          <div className="mb-4">
            <span className="text-xs text-gray-500 font-semibold">
              Tanggal lahir
            </span>
            <input
              type="date"
              name="dob"
              min="1900-01-01"
              max={new Date().toISOString().split("T")[0]}
              className={commonClass}
              value={form.dob}
              onChange={handleChange}
              required
              placeholder="tanggal lahir"
            />
            <input
              type="text"
              name="city"
              placeholder="Domisili saat ini"
              className={commonClass}
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <span className="text-xs text-gray-500 font-semibold">
              Apakah Memiliki Asuransi Pribadi ?
            </span>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="hasInsurance"
                  value="ya"
                  checked={form.hasInsurance === "ya"}
                  onChange={handleChange}
                />
                Ya
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="hasInsurance"
                  value="tidak"
                  checked={form.hasInsurance === "tidak"}
                  onChange={handleChange}
                />
                Tidak
              </label>
            </div>

            {form.hasInsurance === "ya" && (
              <div className="mt-2">
                <select
                  name="insuranceCompany"
                  className={commonClass}
                  value={form.insuranceCompany}
                  onChange={handleChange}
                >
                  <option value="">Pilih Asuransi</option>
                  <option value="prudential">Prudential</option>
                  <option value="allianz">Allianz</option>
                  <option value="generali">Generali</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
            )}
          </div>

          <div className="">
            <span className="text-xs text-gray-500 font-semibold">
              Tujuan Anda :
            </span>
            <select
              name="topik"
              className={commonClass}
              value={form.topik}
              onChange={handleChange}
            >
              <option value="">Pilih Topik Anda</option>
              <option value="review polis asuransi">
                Bantu Review Polis Asuransi
              </option>
              <option value="berapa harga premi saya">
                Berapa Harga Premi Saya
              </option>
              <option value="berapa harga premi anggota keluarga saya">
                Berapa Harga Premi Anggota Keluarga Saya
              </option>
              <option value="tanya-tanya asuransi">
                Tanya-tanya seputar asuransi
              </option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>

          <input
            type="text"
            name="message"
            placeholder="Pesan / Pertanyaan Anda"
            className={commonClass}
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn gap-3 max-lg:mx-auto btn-primary rounded-sm mt-5 text-[13px] md:text-[16px] w-fit font-semibold lg:mt-12.5 p-2 md:px-4"
          >
            Whatsapp ke Albert {telegramSVG}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
