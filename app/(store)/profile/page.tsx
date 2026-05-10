"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [userId, setUserId] = useState("");

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUserId(user.id);

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error && error.code !== "PGRST116") {
        console.error(error.message);
      }

      if (data) {
        setFullName(data.full_name || "");
        setUsername(data.username || "");
        setEmail(data.email || user.email || "");
        setPhone(data.phone || "");
        setAddress(data.address || "");
        setBio(data.bio || "");
        setAvatar(data.avatar_url || "");
      } else {
        setEmail(user.email || "");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const uploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);

      const file = e.target.files?.[0];

      if (!file) return;

      const fileExt = file.name.split(".").pop();

      const fileName = `${userId}-${Date.now()}.${fileExt}`;

      const filePath = `avatars/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, {
          upsert: true,
        });

      if (uploadError) {
        alert(uploadError.message);
        return;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("avatars").getPublicUrl(filePath);

      setAvatar(publicUrl);

      alert("Foto berhasil diupload");
    } catch (err) {
      console.error(err);
      alert("Gagal upload foto");
    } finally {
      setUploading(false);
    }
  };

  const saveProfile = async () => {
    try {
      setSaving(true);

      const { error } = await supabase.from("profiles").upsert({
        id: userId,
        full_name: fullName,
        username: username,
        email: email,
        phone: phone,
        address: address,
        bio: bio,
        avatar_url: avatar,
        updated_at: new Date(),
      });

      if (error) {
        alert(error.message);
        return;
      }

      alert("Profil berhasil diperbarui");
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="animate-pulse text-lg">Memuat profil...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* SIDEBAR */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 h-fit">
          <div className="flex flex-col items-center text-center">
            <img
              src={
                avatar ||
                `https://ui-avatars.com/api/?name=${fullName || "User"}`
              }
              alt="avatar"
              className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
            />

            {/* Upload Avatar */}
            <label className="mt-5 cursor-pointer">
              <span className="bg-yellow-400 hover:bg-red-500 hover:text-white text-black px-4 py-2 rounded-xl text-sm font-semibold transition">
                {uploading ? "Uploading..." : "Upload Foto"}
              </span>

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={uploadAvatar}
              />
            </label>

            <h2 className="mt-6 text-2xl font-bold">
              {fullName || "Nama Pengguna"}
            </h2>

            <p className="text-gray-400 mt-1">@{username || "username"}</p>

            <span className="mt-4 px-4 py-2 rounded-full bg-yellow-400 text-black text-sm font-semibold">
              Seller Account
            </span>
          </div>

          {/* INFO */}
          <div className="mt-8 border-t border-zinc-800 pt-6 space-y-4 text-sm">
            <div>
              <p className="text-gray-500">Email</p>
              <p>{email || "-"}</p>
            </div>

            <div>
              <p className="text-gray-500">Phone</p>
              <p>{phone || "-"}</p>
            </div>

            <div>
              <p className="text-gray-500">Address</p>
              <p>{address || "-"}</p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-yellow-400">
              Pengaturan Profil
            </h1>

            <p className="text-gray-400 mt-2">
              Kelola informasi akun dan identitas marketplace kamu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Nama Lengkap
              </label>

              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Masukkan nama lengkap"
                className="w-full bg-zinc-800 border border-zinc-700 focus:border-yellow-400 outline-none rounded-xl px-4 py-3"
              />
            </div>

            {/* Username */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Username
              </label>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username"
                className="w-full bg-zinc-800 border border-zinc-700 focus:border-yellow-400 outline-none rounded-xl px-4 py-3"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">Email</label>

              <input
                type="email"
                value={email}
                disabled
                className="w-full bg-zinc-800 border border-zinc-700 text-gray-500 rounded-xl px-4 py-3 cursor-not-allowed"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Nomor HP
              </label>

              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="08xxxxxxxxxx"
                className="w-full bg-zinc-800 border border-zinc-700 focus:border-yellow-400 outline-none rounded-xl px-4 py-3"
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm text-gray-400">Alamat</label>

              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Masukkan alamat lengkap"
                className="w-full bg-zinc-800 border border-zinc-700 focus:border-yellow-400 outline-none rounded-xl px-4 py-3"
              />
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm text-gray-400">Bio</label>

              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Ceritakan tentang diri atau toko kamu..."
                className="w-full h-36 bg-zinc-800 border border-zinc-700 focus:border-yellow-400 outline-none rounded-xl px-4 py-3 resize-none"
              />
            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-10 flex justify-end">
            <button
              onClick={saveProfile}
              disabled={saving}
              className="bg-yellow-400 hover:bg-red-500 hover:text-white text-black font-bold px-8 py-3 rounded-xl transition duration-300"
            >
              {saving ? "Menyimpan..." : "Simpan Perubahan"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
