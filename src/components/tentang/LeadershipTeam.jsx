import { Icon } from '../ui.jsx'
import { TEAM_MEMBERS } from '../../data/about.js'

export default function LeadershipTeam() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-md text-label-md mb-3">
            <span className="material-symbols-outlined text-sm">group</span>
            <span>Tim Inti Rekayasa</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
            Pikiran di Balik Solusi Digital Anda
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">
            Kolaborasi antara insinyur perangkat lunak senior, perancang antarmuka presisi, dan konsultan strategi arsitektur digital.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/30">
            Jakarta HQ • Distributed Squad
          </span>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.name} className="bg-surface-container/70 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-full aspect-square rounded-lg overflow-hidden bg-surface-container-high mb-4 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={member.name}
                  src={member.image}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-60"></div>
              </div>
              <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">{member.name}</h4>
              <span className="inline-block mt-1 font-label-sm text-label-sm text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                {member.role}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">{member.bio}</p>
            </div>
            <div className="pt-4 border-t border-outline-variant/20 mt-4 flex items-center gap-3 text-on-surface-variant">
              {member.links.map((link, idx) => (
                <>
                  <a key={idx} className="hover:text-primary transition-colors flex items-center gap-1 font-label-sm text-label-sm" href={link.href}>
                    <span className={`material-symbols-outlined text-base ${link.icon === 'code' ? 'fill-icon' : ''}`}>{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                  {idx < member.links.length - 1 && <span className="text-outline-variant">•</span>}
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}