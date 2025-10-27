"use client";

import SpotlightCard from "@/components/SpotlightCard";
import LightRays from "@/components/LightRays";
import BlurFade from "@/components/BlurFade";
import TiltedCard from "@/components/TiltedCard";
import ProfileCard from "@/components/ProfileCard";

export default function Portfolio() {
  return (
    <div className="relative w-full overflow-hidden text-white bg-black">
      {/* === Background === */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.2}
          fadeDistance={8}
          lightSpread={2}
          rayLength={2}
          followMouse
          mouseInfluence={0.2}
          noiseAmount={0.1}
          distortion={0}
          className="opacity-70"
        />
      </div>

      {/* === Navbar === */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-20 bg-black/40 backdrop-blur-sm border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wide">Dwi Candra Andka</h1>
        <ul className="flex gap-8 text-sm uppercase tracking-wide">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* === Home Section === */}
      <section
        id="home"
        className="relative z-10 flex flex-col md:flex-row items-center justify-center h-screen px-10 md:px-20"
      >
        <div className="flex-1 text-center md:text-left space-y-6">
          <BlurFade delay={0.1} inView>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I’m <span className="text-blue-400">Dwi Candra Andka</span>
            </h1>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-lg md:text-xl opacity-80 max-w-md">
              Saya seorang{" "}
              <span className="text-blue-300">Fullstack Developer</span> yang
              fokus pada React, Golang & Laravel.
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#projects">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg transition-all">
                  Lihat Proyek
                </button>
              </a>
              <a href="#contact">
                <button className="border border-blue-400 hover:bg-blue-400 hover:text-black px-6 py-3 rounded-xl transition-all">
                  Hubungi Saya
                </button>
              </a>
            </div>
          </BlurFade>
        </div>

        <div className="flex-1 flex justify-center mt-16 md:mt-0">
          <BlurFade delay={0.4} inView>
            <ProfileCard
              name="Dwi Candra Andika"
              title="Fullstack Developer"
              handle="kocannnnnn"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/profile.jpeg"
              miniAvatarUrl="/mini-profile.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
            />
          </BlurFade>
        </div>
      </section>

      {/* === About Section === */}
      <section id="about" className="relative z-10 px-10 md:px-20 py-24">
        <BlurFade delay={0.1} inView>
          <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        </BlurFade>
        <BlurFade delay={0.2} inView>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed opacity-85 text-center">
            <p>
              Halo! Saya{" "}
              <span className="text-blue-300">Dwi Candra Andka</span>, mahasiswa
              Teknik Informatika di Universitas Tadulako sekaligus freelance
              fullstack developer. Keahlian saya meliputi TypeScript,
              JavaScript, React, dan Golang.
            </p>
            <p className="mt-4">
              Saya tertarik pada pengembangan aplikasi web yang efisien dan
              desain antarmuka yang berfokus pada pengguna. Saat ini, saya juga
              mengeksplorasi teknologi seperti gRPC, microservices, serta AI
              lokal menggunakan Ollama.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* === Projects Section === */}
      <section
        id="projects"
        className="relative z-10 px-10 md:px-20 py-24 bg-transparent"
      >
        <BlurFade delay={0.1} inView>
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}

          <SpotlightCard className="p-6 bg-gray-900/60 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-all">
            <img
              src="/online-mentoring.png"
              alt="Online Mentoring"
              className="rounded-xl w-full h-48 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              Learnmate
            </h3>
            <p className="opacity-80 mb-4">
              Platform berbasis web yang menghubungkan pelajar dengan mentor
              profesional, dilengkapi sistem booking & pembayaran Midtrans.
            </p>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">
              Lihat Detail
            </button>
          </SpotlightCard>


          {/* Project 2 */}
          <SpotlightCard className="p-6 bg-gray-900/60 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-all">
            <img
              src="/localvalet.png"
              alt="LocalValet"
              className="rounded-xl w-full h-48 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold text-purple-400 mb-2">
              LocalValet
            </h3>
            <p className="opacity-80 mb-4">
              LocalValet adalah aplikasi panel kontrol server lokal yang dirancang sebagai alternatif yang cepat dan ringan untuk XAMPP atau Laragon yang tersedia di Windows, Linux, dan MacOS. Dibuat dari awal menggunakan Go (Golang) untuk backend, aplikasi ini memiliki jejak memori yang sangat rendah dan kinerja instan
            </p>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">
              Lihat Detail
            </button>
          </SpotlightCard>

          {/* Project 3 */}
          <SpotlightCard className="p-6 bg-gray-900/60 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-all">
            <img
              src="/invertamind.png"
              alt="Inverta Mind"
              className="rounded-xl w-full h-48 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold text-purple-400 mb-2">
              InvertaMind
            </h3>
            <p className="opacity-80 mb-4">
              Inverta Mind adalah sistem kecerdasan buatan yang dirancang untuk mengevaluasi, mengkritisi, dan memperbaiki kesimpulannya sendiri secara mandiri. Proyek ini berfokus pada pengembangan model yang mampu melakukan self-reflection terhadap respons yang dihasilkannya dengan pendekatan meta-reasoning dan prompt chaining
            </p>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">
              Lihat Detail
            </button>
          </SpotlightCard>
        </div>
      </section >

      {/* === Contact Section === */}
      < section
        id="contact"
        className="relative z-10 px-10 md:px-20 py-24 bg-transparent"
      >
        <BlurFade delay={0.1} inView>
          <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        </BlurFade>
        <BlurFade delay={0.2} inView>
          <div className="max-w-2xl mx-auto text-lg leading-relaxed">
            <p className="mb-4 text-center">
              Ingin bekerja sama atau berdiskusi? Kirimkan pesan melalui
              formulir di bawah ini.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nama"
                className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700"
              />
              <textarea
                placeholder="Pesan"
                rows={4}
                className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-all"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </BlurFade>
      </section >

      {/* === Footer === */}
      < footer className="relative z-10 py-6 text-center text-sm opacity-60 border-t border-white/10" >
        © {new Date().getFullYear()} Dwi Candra Andka — All Rights Reserved.
      </footer >
    </div >
  );
}
