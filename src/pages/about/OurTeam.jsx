import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { team } from "../../data/projects";
import { img } from "../../utils/images";

export default function OurTeam() {
  return (
    <>
      <PageHero desktop={img("/projects/aaa.jpeg")} mobile={img("/about/mobile-slide2.jpeg")} alt="Our Team" className="h-[70vh] md:h-[85vh]" />

      <section className="py-16 px-4 sm:px-6 lg:px-8" id="team">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-pink-brand bg-pink-light rounded-full px-4 py-1.5 mb-4">
              The People Behind The Mission
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Our <span className="gradient-text">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
            {team.slice(0, 3).map((m, i) => (
              <Reveal
                key={m.name}
                delay={i * 80}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-[24px] border border-border-pink overflow-hidden shadow-pink-sm hover:shadow-pink-lg hover:-translate-y-2 transition-all h-full w-full">
                  <img src={m.img} alt={m.name} className="w-full h-64 object-contain" />
                  <div className="p-6 text-center">
                    <h3 className="font-display text-lg font-bold">{m.name}</h3>
                    <p className="text-xs font-semibold tracking-widest text-pink-brand mt-1">
                      {m.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            {team.slice(3, 5).map((m, i) => (
              <Reveal
                key={m.name}
                delay={(i + 3) * 80}
                className={i === 0 ? "lg:col-start-2 lg:col-span-2" : "lg:col-span-2"}
              >
                <div className="bg-white rounded-[24px] border border-border-pink overflow-hidden shadow-pink-sm hover:shadow-pink-lg hover:-translate-y-2 transition-all h-full w-full">
                  <img src={m.img} alt={m.name} className="w-full h-64 object-contain" />
                  <div className="p-6 text-center">
                    <h3 className="font-display text-lg font-bold">{m.name}</h3>
                    <p className="text-xs font-semibold tracking-widest text-pink-brand mt-1">
                      {m.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
