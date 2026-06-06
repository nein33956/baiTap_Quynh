import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

const skills = [
  { name: "Quản lý tệp & thư mục", level: "Tốt" },
  { name: "Tìm kiếm & đánh giá thông tin", level: "Khá" },
  { name: "Viết prompt & ứng dụng AI", level: "Tốt" },
  { name: "Hợp tác trực tuyến", level: "Tốt" },
  { name: "Sáng tạo nội dung số", level: "Khá" },
  { name: "An toàn & liêm chính học thuật", level: "Tốt" },
];

const tamDac = [
  "Tự xây dựng được một sản phẩm số hoàn chỉnh — chính là website Portfolio này.",
  "Biết viết prompt hiệu quả, biến AI thành “trợ lý học tập” thực sự.",
  "Hiểu sâu hơn về liêm chính học thuật và đạo đức số.",
];

const thachThuc = [
  "Phân biệt nguồn tin đáng tin cậy giữa “biển” thông tin trên mạng.",
  "Cân bằng giữa tận dụng AI và giữ tính trung thực, tự chủ trong học tập.",
  "Sắp xếp thời gian để hoàn thiện đầy đủ cả sáu nhiệm vụ.",
];

export default function Summary() {
  return (
    <>
      {/* Header */}
      <section className="pt-16 pb-8 sm:pt-20">
        <div className="container-x text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              Tổng kết
            </span>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl">
              Nhìn lại <span className="gradient-text">hành trình</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
              Trải nghiệm, kiến thức và những điều đọng lại sau sáu dự án AI và công nghệ số.
            </p>
            <div className="rule mx-auto mt-6 w-24" />
          </Reveal>
        </div>
      </section>

      {/* 01 — Lời kết */}
      <section className="py-10">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Head no="01" title="Lời kết" />
            </Reveal>
            <Reveal>
              <p className="text-lg leading-relaxed text-ink-soft first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-brand-700">
                Khi bắt đầu môn học, tôi từng nghĩ “AI và công nghệ số” chỉ đơn giản là biết dùng máy
                tính. Nhưng đi hết sáu dự án, tôi nhận ra đó là cả một cách tư duy và làm việc
                trong môi trường số — từ tổ chức dữ liệu, tìm và thẩm định thông tin, đến cộng
                tác nhóm và sử dụng AI.
              </p>

              <blockquote className="my-9 border-y border-brand-200 py-7 text-center">
                <p className="font-display text-2xl font-medium italic text-brand-800 sm:text-3xl">
                  “AI và Công nghệ số không phải là biết bấm nút, mà là hiểu vì sao mình bấm.”
                </p>
              </blockquote>

              <p className="leading-relaxed text-ink-muted">
                Điều tôi thích nhất là khám phá cách “ra lệnh” cho AI sao cho hiệu quả, và tự
                tay tạo ra những sản phẩm số của riêng mình. Thử thách lớn nhất là rèn thói quen
                kiểm chứng nguồn và trình bày mọi thứ một cách khoa học, minh bạch.
              </p>
              <p className="mt-4 leading-relaxed text-ink-muted">
                Nhìn lại, tôi thấy mình tiến bộ rõ rệt: từ chỗ dùng công cụ theo cảm tính, nay
                tôi tự tin hơn nhiều khi khai thác thông tin học thuật và đưa công nghệ vào việc
                học ngành Y Khoa.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 — Điều đọng lại */}
      <section className="py-10">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <Head no="02" title="Điều đọng lại" subtitle="Sáu năng lực cốt lõi" />
            </Reveal>
            <div className="grid border-t border-brand-200 sm:grid-cols-2 sm:gap-x-12">
              {projects.map((p, i) => (
                <Reveal key={p.id} delay={(i % 2) * 0.06}>
                  <div className="flex gap-5 border-b border-brand-100 py-5">
                    <span className="font-display text-3xl font-semibold leading-none text-brand-200">
                      {String(p.id).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
                      <p className="mt-1 text-sm text-ink-muted">{p.short}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Tâm đắc & Thách thức */}
      <section className="py-10">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <Head no="03" title="Tâm đắc & Thách thức" />
            </Reveal>
            <div className="grid gap-10 sm:grid-cols-2">
              <Reveal>
                <div>
                  <h3 className="font-display text-xl font-semibold text-brand-800">
                    Điều tôi tâm đắc
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                    {tamDac.map((t, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-brand-500">—</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="sm:border-l sm:border-brand-100 sm:pl-10">
                  <h3 className="font-display text-xl font-semibold text-brand-800">
                    Thách thức đã vượt qua
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                    {thachThuc.map((t, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-brand-500">—</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Tự đánh giá */}
      <section className="py-10">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Head no="04" title="Tự đánh giá bản thân" />
            </Reveal>
            <div className="border-t border-brand-200">
              {skills.map((s) => (
                <Reveal key={s.name}>
                  <div className="flex items-center justify-between border-b border-brand-100 py-3.5">
                    <span className="text-sm text-ink-soft">{s.name}</span>
                    <span
                      className={`text-xs font-bold uppercase tracking-[0.16em] ${
                        s.level === "Tốt" ? "text-brand-700" : "text-ink-muted"
                      }`}
                    >
                      {s.level}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-6 border-l-2 border-brand-700 pl-5 text-sm leading-relaxed text-ink-soft">
                <b className="text-ink">Định hướng tiếp theo:</b> tôi sẽ tiếp tục rèn luyện kỹ
                năng đánh giá nguồn và sáng tạo nội dung số, đồng thời ứng dụng AI và công nghệ số vào
                việc học ngành Y Khoa — tra cứu tài liệu, phác đồ điều trị và hỗ trợ nghiên cứu
                khoa học một cách hiệu quả, có trách nhiệm.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="pb-16 text-center">
        <Link to="/du-an" className="btn-primary">
          <ArrowLeft className="h-4 w-4" /> Xem lại 6 dự án
        </Link>
      </div>
    </>
  );
}

function Head({ no, title, subtitle }: { no: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-2xl font-semibold text-brand-300">{no}</span>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      </div>
      {subtitle && (
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          {subtitle}
        </p>
      )}
      <div className="rule mt-4" />
    </div>
  );
}
