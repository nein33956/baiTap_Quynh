import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import { getIcon } from "../lib/icons";

export default function Projects() {
  return (
    <>
      {/* Page header */}
      <section className="pt-16 pb-10 sm:pt-20">
        <div className="container-x text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              Trang Dự án
            </span>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl">
              Tập hợp <span className="gradient-text">sáu dự án</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
              Mỗi dự án trình bày đầy đủ: mục tiêu, các bước thực hiện theo yêu cầu, minh chứng
              đã nộp và phần trích nguồn AI minh bạch.
            </p>
            <div className="rule mx-auto mt-6 w-24" />
          </Reveal>
        </div>
      </section>

      {/* Magazine list */}
      <section className="pb-16">
        <div className="container-x">
          <div className="border-t border-brand-100">
            {projects.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal key={p.id} delay={(i % 3) * 0.06}>
                  <Link
                    to={`/du-an/${p.slug}`}
                    className="group grid grid-cols-[auto_1fr] items-center gap-6 border-b border-brand-100 py-8 transition-colors hover:bg-brand-50/40 sm:gap-10 sm:py-10"
                  >
                    {/* Số thứ tự lớn */}
                    <span className="font-display text-6xl font-semibold leading-none text-brand-100 transition-colors group-hover:text-brand-400 sm:text-8xl">
                      {String(p.id).padStart(2, "0")}
                    </span>

                    {/* Nội dung */}
                    <div>
                      <div className="flex items-center gap-2 text-brand-600">
                        <Icon className="h-4 w-4" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                          {p.task}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-ink transition-colors group-hover:text-brand-800 sm:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                        {p.short}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                        <div className="flex flex-wrap gap-1.5">
                          {p.tools.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-brand-100 px-2.5 py-0.5 text-[11px] font-medium text-ink-soft"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2.5">
                          Xem chi tiết <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
