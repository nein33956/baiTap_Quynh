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
            Sinh viên <span className="font-semibold text-ink-soft">{SITE.major}</span> — hành
            trình rèn luyện <span className="gradient-text">năng lực số</span>: quản lý dữ liệu,
            khai thác thông tin học thuật và ứng dụng AI một cách có trách nhiệm.
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

      {/* ===== GIỚI THIỆU BẢN THÂN ===== */}
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <SectionHead kicker="Về tôi" title="Giới thiệu bản thân" />
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {goals.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.1}>
                <div className="border-t-2 border-brand-800 pt-5">
                  <div className="flex items-center gap-2 text-brand-700">
                    <g.icon className="h-5 w-5" />
                    <h3 className="font-display text-xl font-semibold text-ink">{g.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{g.body}</p>
                </div>
              </Reveal>
            ))}
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

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal key={p.id} delay={(i % 3) * 0.1}>
                  <Link
                    to={`/du-an/${p.slug}`}
                    className="group flex h-full flex-col border-t-2 border-brand-800 pt-5 transition-all hover:border-brand-500"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="h-6 w-6 text-brand-700" />
                      <span className="font-display text-3xl font-semibold text-brand-100 transition-colors group-hover:text-brand-300">
                        {String(p.id).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-600">
                      {p.task}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-semibold text-ink">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{p.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2.5">
                      Xem chi tiết <ArrowRight className="h-4 w-4" />
                    </span>
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

      {/* ===== CTA liêm chính ===== */}
      <section className="pb-10 pt-6">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-brand-900 p-10 text-center text-paper sm:p-14">
              <ShieldCheck className="relative mx-auto h-12 w-12 text-brand-300" />
              <h2 className="relative mt-4 font-display text-3xl font-semibold">
                Cam kết liêm chính học thuật
              </h2>
              <p className="relative mx-auto mt-3 max-w-2xl text-brand-100">
                Toàn bộ Portfolio được thực hiện trung thực. Mọi nội dung tham khảo và công cụ
                AI đều được ghi nguồn rõ ràng ở từng dự án.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
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
