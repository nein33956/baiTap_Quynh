import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Stethoscope,
  Target,
  Rocket,
  User,
  FolderKanban,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { projects, SITE } from "../data/projects";
import { getIcon } from "../lib/icons";

const stats = [
  { big: "06", lbl: "Dự án thành phần" },
  { big: "06", lbl: "Năng lực cốt lõi" },
  { big: "100%", lbl: "Trích nguồn minh bạch" },
  { big: "A+", lbl: "Mục tiêu chất lượng" },
];

const goals = [
  {
    icon: User,
    title: "Thông tin cá nhân",
    body: (
      <>
        <b>Họ tên:</b> {SITE.fullName}
        <br />
        <b>Ngành:</b> {SITE.major}
        <br />
        <b>Trường:</b> {SITE.school}
        <br />
        <b>Sở thích:</b> {SITE.hobbies}
      </>
    ),
  },
  {
    icon: Target,
    title: "Mục tiêu học tập",
    body: "Nắm vững năng lực số nền tảng phục vụ học tập & nghiên cứu y khoa: quản lý tài liệu khoa học, tra cứu thông tin đáng tin cậy, sử dụng AI hiệu quả và có đạo đức.",
  },
  {
    icon: Rocket,
    title: "Định hướng phát triển",
    body: "Trở thành người làm y khoa biết tận dụng công nghệ số: ứng dụng AI hỗ trợ học tập/chẩn đoán, đảm bảo an toàn dữ liệu bệnh nhân và liêm chính học thuật.",
  },
];

const portfolioGoals = [
  "Thể hiện các kỹ năng số đã học qua 6 dự án thực hành cụ thể.",
  "Lưu trữ sản phẩm cá nhân có hệ thống, dễ truy cập & chia sẻ.",
  "Ghi lại quá trình tự học và sự tiến bộ về năng lực số.",
  "Phản ánh tư duy học thuật: minh bạch nguồn, dùng AI có trách nhiệm.",
];

export default function Home() {
  return (
    <>
      {/* ===== HERO — Masthead tạp chí ===== */}
      <section className="relative overflow-hidden pt-16 pb-14 sm:pt-24">
        <div className="container-x text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <span className="hidden h-px w-12 bg-brand-300 sm:block" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-700">
              Portfolio cá nhân · Môn Năng lực số
            </span>
            <span className="hidden h-px w-12 bg-brand-300 sm:block" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mx-auto mt-7 max-w-4xl font-display text-5xl font-semibold leading-[1.04] text-ink sm:text-7xl"
          >
            {SITE.fullName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted"
          >
            Sinh viên <span className="font-semibold text-ink-soft">{SITE.major}</span>, đam mê
            công nghệ và không ngừng học hỏi. Đây là nơi tôi lưu lại hành trình{" "}
            <span className="gradient-text">làm chủ năng lực số</span> — từ tổ chức dữ liệu, tra
            cứu thông tin học thuật, đến ứng dụng AI một cách thông minh và có trách nhiệm.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.19 }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <Link to="/du-an" className="btn-primary">
              Khám phá 6 dự án <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/tong-ket" className="btn-outline">
              Tổng kết hành trình
            </Link>
          </motion.div>

          <div className="mx-auto mt-8 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-muted">
            <Stethoscope className="h-3.5 w-3.5 text-brand-600" /> {SITE.major} · Future Doctor
          </div>

          {/* Hàng số liệu kẻ ngang */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-14 grid max-w-3xl grid-cols-2 border-y border-brand-100 sm:grid-cols-4 sm:divide-x sm:divide-brand-100"
          >
            {stats.map((s) => (
              <div key={s.lbl} className="px-4 py-6">
                <div className="font-display text-4xl font-semibold text-brand-800">{s.big}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-ink-muted">
                  {s.lbl}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== GIỚI THIỆU — Trang giới thiệu kiểu tạp chí ===== */}
      <section className="py-16">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
            {/* Bài giới thiệu có drop-cap */}
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
                Về tôi
              </span>
              <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Đôi dòng giới thiệu
              </h2>
              <div className="rule mt-5 w-24" />
              <p className="mt-7 text-lg leading-relaxed text-ink-soft first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-7xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-brand-700">
                Tôi là {SITE.fullName}, sinh viên {SITE.major} tại {SITE.school}. Với tôi, môn
                Năng lực số không chỉ là học cách dùng công cụ, mà là rèn một lối tư duy và làm
                việc trong môi trường số: hiệu quả, cẩn trọng và có trách nhiệm.
              </p>
              <p className="mt-4 leading-relaxed text-ink-muted">{goals[1].body}</p>
              <p className="mt-4 leading-relaxed text-ink-muted">{goals[2].body}</p>
            </Reveal>

            {/* Hồ sơ nhanh dạng danh sách */}
            <Reveal delay={0.1}>
              <aside className="border border-brand-200 bg-white p-7 shadow-soft">
                <h3 className="font-display text-lg font-semibold text-ink">Hồ sơ</h3>
                <div className="rule mb-5 mt-3" />
                <div className="space-y-3.5 text-sm">
                  <Fact label="Họ tên" value={SITE.fullName} />
                  <Fact label="Ngành" value={SITE.major} />
                  <Fact label="Trường" value={SITE.school} />
                  <Fact label="Sở thích" value={SITE.hobbies} />
                </div>
                <div className="mt-6 border-t border-brand-100 pt-5">
                  <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-600">
                    <Stethoscope className="h-3.5 w-3.5" /> Future Doctor
                  </p>
                  <p className="mt-2 font-display text-base italic text-ink-soft">
                    "Học công nghệ để phục vụ con người tốt hơn."
                  </p>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== MỤC TIÊU PORTFOLIO ===== */}
      <section className="py-16">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="chip"><Target className="h-3.5 w-3.5" /> Mục tiêu Portfolio</span>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink">
                Tại sao tôi xây dựng <span className="gradient-text">Portfolio</span> này?
              </h2>
              <p className="mt-4 text-ink-muted">
                Portfolio là nơi tôi tổng hợp, hệ thống hóa kết quả học tập và thể hiện sự
                trưởng thành về năng lực số trong suốt môn học.
              </p>
            </div>
            <ul className="space-y-1">
              {portfolioGoals.map((g, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <li className="flex items-start gap-4 border-b border-brand-100 py-4">
                    <span className="font-display text-xl font-semibold text-brand-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-1 text-sm text-ink-soft">{g}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== PREVIEW DỰ ÁN ===== */}
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <SectionHead kicker="Dự án nổi bật" title="Sáu năng lực · Sáu dự án" />
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-4xl border-t border-brand-200 sm:grid-cols-2 sm:gap-x-14">
            {projects.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal key={p.id} delay={(i % 2) * 0.08}>
                  <Link
                    to={`/du-an/${p.slug}`}
                    className="group flex gap-5 border-b border-brand-100 py-6"
                  >
                    <span className="font-display text-4xl font-semibold leading-none text-brand-200 transition-colors group-hover:text-brand-500">
                      {String(p.id).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-brand-600">
                        <Icon className="h-4 w-4" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                          {p.task}
                        </span>
                      </div>
                      <h3 className="mt-1.5 font-display text-xl font-semibold text-ink transition-colors group-hover:text-brand-800">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{p.short}</p>
                      <span className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2.5">
                        Xem chi tiết <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link to="/du-an" className="btn-primary">
              <FolderKanban className="h-4 w-4" /> Xem tất cả dự án
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Cam kết liêm chính — kiểu tuyên ngôn có chữ ký ===== */}
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <figure className="mx-auto max-w-3xl border-y-2 border-brand-800 py-12 text-center">
              <ShieldCheck className="mx-auto h-9 w-9 text-brand-700" />
              <p className="mt-6 font-display text-2xl font-medium italic leading-relaxed text-ink sm:text-[1.7rem]">
                “Toàn bộ Portfolio này được thực hiện một cách trung thực. Mọi nội dung tham
                khảo và công cụ AI đều được ghi nguồn rõ ràng ở từng dự án.”
              </p>
              <figcaption className="mt-7">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-600">
                  Cam kết liêm chính học thuật
                </span>
                <span className="mt-2 block font-display text-2xl italic text-brand-800">
                  — {SITE.fullName}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-brand-100 pb-3 last:border-0 last:pb-0">
      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-600">
        {label}
      </span>
      <span className="text-ink-soft">{value}</span>
    </div>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
        {kicker}
      </span>
      <h2 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">{title}</h2>
      <div className="rule mx-auto mt-5 w-24" />
    </div>
  );
}
