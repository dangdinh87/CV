'use client'

import Image from 'next/image'
import { useLanguage } from '../context/language-context'

export function CVContent() {
  const { t, tr } = useLanguage()

  return (
    <div className="cv">

      {/* ═══ HEADER ═══ */}
      <header className="header">
        <Image src="/avatar.jpg" alt="Nguyen Dang Dinh" className="avatar" width={140} height={140} />
        <div className="h-info">
          <h1>Nguyen Dang Dinh</h1>
          <div className="h-title">{t('jobTitle')} <span className="yoe">{t('yoe')}</span></div>
          <div className="contact-grid">
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
              <span className="label">{t('birth')}</span>
              <span>08/07/2000</span>
            </div>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              <span className="label">{t('email')}</span>
              <a href="mailto:nguyendangdinh47@gmail.com">nguyendangdinh47@gmail.com</a>
            </div>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
              <span className="label">{t('phone')}</span>
              <a href="tel:+84977963775">0977 963 775</a>
            </div>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              <span className="label">{t('github')}</span>
              <a href="https://github.com/dangdinh87" target="_blank" rel="noopener">github.com/dangdinh87</a>
            </div>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
              <span className="label">{t('address')}</span>
              <span>Da Nang, Vietnam</span>
            </div>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span className="label">{t('linkedin')}</span>
              <a href="https://www.linkedin.com/in/dinhnguyen87" target="_blank" rel="noopener">linkedin.com/in/dinhnguyen87</a>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ BODY ═══ */}
      <main className="body">

        {/* ── OVERVIEW ── */}
        <section>
          <div className="sh">
            <div className="sh-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0"/>
              </svg>
            </div>
            <h2>{t('overview')}</h2>
          </div>
          <ul className="overview-list">
            {['overview1','overview2','overview3','overview4','overview5','overview6','overview7','overview8','overview9','overview10'].map(key => {
              const val = t(key)
              return val ? <li key={key}>{tr(key)}</li> : null
            })}
          </ul>
        </section>

        {/* ── WORK EXPERIENCE — COMPANY ── */}
        <section>
          <div className="sh">
            <div className="sh-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
              </svg>
            </div>
            <h2>{t('workExperienceCompany')}</h2>
          </div>

          <div className="xp-list">

            <div className="xp-item current">
              <div className="xp-date">04/2025 — Present</div>
              <div className="xp-co">Doraverse</div>
              <div className="xp-role">Frontend Developer</div>
              <div className="xp-body">
                <ul>
                  <li>{tr('expDoraverse1')}</li>
                  <li>{tr('expDoraverse2')}</li>
                  <li>{tr('expDoraverse3')}</li>
                  <li>{tr('expDoraverse4')}</li>
                  <li>{tr('expDoraverse5')}</li>
                  <li>{tr('expDoraverse6')}</li>
                </ul>
              </div>
            </div>

            <div className="xp-item">
              <div className="xp-date">12/2022 — 03/2025</div>
              <div className="xp-co">Selly &amp; Cashbag (CaSe Group)</div>
              <div className="xp-role">Frontend Developer &middot; Backend Developer</div>
              <div className="xp-body">
                <ul>
                  <li>{tr('expSelly1')}</li>
                  <li>{tr('expSelly2')}</li>
                  <li>{tr('expSelly3')}</li>
                  <li>{tr('expSelly4')}</li>
                  <li>{tr('expSelly5')}</li>
                  <li>{tr('expSelly6')}</li>
                  <li>{tr('expSelly7')}</li>
                </ul>
              </div>
            </div>

            <div className="xp-item">
              <div className="xp-date">09/2021 — 11/2021</div>
              <div className="xp-co">NCCSoft</div>
              <div className="xp-role">Intern Fullstack</div>
              <div className="xp-body">
                <ul>
                  <li>{tr('expNccsoft1')}</li>
                  <li>{tr('expNccsoft2')}</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ── WORK EXPERIENCE — FREELANCE ── */}
        <section>
          <div className="sh">
            <div className="sh-icon" style={{ background: 'var(--green-bg)', color: 'var(--green-ink)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
              </svg>
            </div>
            <h2>{t('workExperienceFreelance')}</h2>
          </div>

          <div className="xp-list freelance-list">

            <div className="xp-item freelance-item current">
              <div className="xp-date">10/2025 — Present</div>
              <div className="xp-co">Tfluencer (Techcombank)</div>
              <div className="xp-role">Frontend Developer &middot; Backend Developer</div>
              <div className="xp-body">
                <ul>
                  <li>{tr('expTfluencer1')}</li>
                  <li>{tr('expTfluencer2')}</li>
                  <li>{tr('expTfluencer3')}</li>
                  <li>{tr('expTfluencer4')}</li>
                  <li>{tr('expTfluencer5')}</li>
                  <li>{tr('expTfluencer6')}</li>
                </ul>
              </div>
            </div>


            <div className="xp-item freelance-item">
              <div className="xp-date">06/2021 — 08/2021</div>
              <div className="xp-co">giupvieckimphuc.com</div>
              <div className="xp-role">Frontend Developer</div>
              <div className="xp-body">
                <ul>
                  <li>{tr('expGiupviec1')}</li>
                  <li>{tr('expGiupviec2')}</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section>
          <div className="sh">
            <div className="sh-icon" style={{ background: 'var(--purple-bg)', color: '#7C3AED' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
              </svg>
            </div>
            <h2>{t('education')}</h2>
          </div>
          <div className="edu">
            <div>
              <div className="edu-name">{t('eduName')}</div>
              <div className="edu-sub">{t('eduSub')}</div>
            </div>
            <div className="edu-date">08/2018 — 12/2022</div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section>
          <div className="sh">
            <div className="sh-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
              </svg>
            </div>
            <h2>{t('skills')}</h2>
          </div>
          <table className="skills-table">
            <tbody>
              <tr>
                <td>{t('programmingLanguage')}</td>
                <td>
                  <div className="tags">
                    <span className="t b">HTML</span>
                    <span className="t b">CSS</span>
                    <span className="t b">JavaScript</span>
                    <span className="t b">TypeScript</span>
                    <span className="t a">Go</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{t('cssFramework')}</td>
                <td>
                  <div className="tags">
                    <span className="t g">Bootstrap</span>
                    <span className="t g">Tailwind CSS</span>
                    <span className="t g">Ant Design</span>
                    <span className="t g">Shadcn/ui</span>
                    <span className="t g">Motion</span>
                    <span className="t g">Subframer</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{t('webFramework')}</td>
                <td>
                  <div className="tags">
                    <span className="t p">ReactJS</span>
                    <span className="t p">UmiJS</span>
                    <span className="t p">Next.js 14–16</span>
                    <span className="t p">Redux / Dva.js</span>
                    <span className="t p">Zustand</span>
                    <span className="t p">TanStack Query</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{t('aiDevTools')}</td>
                <td>
                  <div className="tags">
                    <span className="t r">Claude Code</span>
                    <span className="t r">ClaudeKit</span>
                    <span className="t r">Cursor AI</span>
                    <span className="t r">Antigravity</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{t('ide')}</td>
                <td>
                  <div className="tags">
                    <span className="t">Visual Studio Code</span>
                    <span className="t">Cursor AI</span>
                    <span className="t">GoLand</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{t('database')}</td>
                <td>
                  <div className="tags">
                    <span className="t a">MongoDB</span>
                    <span className="t a">PostgreSQL</span>
                    <span className="t a">MySQL</span>
                    <span className="t a">Supabase</span>
                    <span className="t a">Redis</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{t('sourceControl')}</td>
                <td>
                  <div className="tags">
                    <span className="t c">Git</span>
                    <span className="t c">Gitea</span>
                    <span className="t c">Github</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{t('devops')}</td>
                <td>
                  <div className="tags">
                    <span className="t c">Docker</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{t('summary')}</td>
                <td style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--ink-secondary)' }}
                  dangerouslySetInnerHTML={{ __html:
                    [t('skillsSummary1'), t('skillsSummary2'), t('skillsSummary3'), t('skillsSummary4')]
                      .map(s => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'))
                      .join('<br />')
                  }}
                />
              </tr>
            </tbody>
          </table>
        </section>

        {/* ── PROJECTS ── */}
        <section>
          <div className="sh">
            <div className="sh-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/>
              </svg>
            </div>
            <h2>{t('projects')}</h2>
          </div>

          {/* 1. Doraverse */}
          <div className="project-block featured">
            <div className="project-header">
              <h3>Doraverse</h3>
              <span className="project-period">04/2025 — Present</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Doraverse</td></tr>
                <tr><td>{t('descriptions')}</td><td>{tr('projDoraverseDesc')}</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>10</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>{tr('projDoraverseResp1')}</li>
                    <li>{tr('projDoraverseResp2')}</li>
                    <li>{tr('projDoraverseResp3')}</li>
                    <li>{tr('projDoraverseResp4')}</li>
                    <li>{tr('projDoraverseResp5')}</li>
                    <li>{tr('projDoraverseResp6')}</li>
                    <li>{tr('projDoraverseResp7')}</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">Next.js 15</span>
                    <span className="t b">React 19</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Tailwind CSS</span>
                    <span className="t g">Shadcn/ui</span>
                    <span className="t p">Zustand</span>
                    <span className="t p">TanStack Query</span>
                    <span className="t r">Socket.IO</span>
                    <span className="t r">gRPC</span>
                    <span className="t r">Kafka</span>
                    <span className="t a">Node.js</span>
                    <span className="t a">Go</span>
                    <span className="t a">MongoDB</span>
                    <span className="t c">Stripe</span>
                    <span className="t c">Sentry</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 2. Vcreator */}
          <div className="project-block featured">
            <div className="project-header">
              <h3>Vcreator</h3>
              <span className="project-period">04/2024 — 08/2024</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Vingroup</td></tr>
                <tr><td>{t('descriptions')}</td><td>{tr('projVcreatorDesc')}</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>6</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>{tr('projVcreatorResp1')}</li>
                    <li>{tr('projVcreatorResp2')}</li>
                    <li>{tr('projVcreatorResp3')}</li>
                    <li>{tr('projVcreatorResp4')}</li>
                    <li>{tr('projVcreatorResp5')}</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">ReactJS</span>
                    <span className="t b">UmiJS</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Ant Design</span>
                    <span className="t g">Bootstrap</span>
                    <span className="t p">Dva.js</span>
                    <span className="t a">Go</span>
                    <span className="t a">Echo</span>
                    <span className="t a">MongoDB</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 2b. Tfluencer */}
          <div className="project-block featured">
            <div className="project-header">
              <h3>Tfluencer — https://tfluencer.vn</h3>
              <span className="project-period">10/2025 — Present</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Techcombank, AccessTrade</td></tr>
                <tr><td>{t('descriptions')}</td><td>{tr('projTfluencerDesc')}</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>6</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer &middot; Backend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>{tr('projTfluencerResp1')}</li>
                    <li>{tr('projTfluencerResp2')}</li>
                    <li>{tr('projTfluencerResp3')}</li>
                    <li>{tr('projTfluencerResp4')}</li>
                    <li>{tr('projTfluencerResp5')}</li>
                    <li>{tr('projTfluencerResp6')}</li>
                    <li>{tr('projTfluencerResp7')}</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">ReactJS</span>
                    <span className="t b">UmiJS</span>
                    <span className="t b">Next.js</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Ant Design</span>
                    <span className="t g">Bootstrap</span>
                    <span className="t g">Tailwind CSS</span>
                    <span className="t g">Shadcn/ui</span>
                    <span className="t p">Dva.js</span>
                    <span className="t p">TanStack Query</span>
                    <span className="t a">Go</span>
                    <span className="t a">Echo</span>
                    <span className="t a">MongoDB</span>
                    <span className="t a">Redis</span>
                    <span className="t a">MinIO</span>
                    <span className="t c">Firebase</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 3. Selly.vn */}
          <div className="project-block">
            <div className="project-header">
              <h3>Selly.vn</h3>
              <span className="project-period">01/2022 — Present</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Selly</td></tr>
                <tr><td>{t('descriptions')}</td><td>{tr('projSellyDesc')}</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>10</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer, Backend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>{tr('projSellyResp1')}</li>
                    <li>{tr('projSellyResp2')}</li>
                    <li>{tr('projSellyResp3')}</li>
                    <li>{tr('projSellyResp4')}</li>
                    <li>{tr('projSellyResp5')}</li>
                    <li>{tr('projSellyResp6')}</li>
                    <li>{tr('projSellyResp7')}</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">ReactJS</span>
                    <span className="t b">UmiJS</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Bootstrap</span>
                    <span className="t g">Ant Design</span>
                    <span className="t p">Dva.js</span>
                    <span className="t a">Go</span>
                    <span className="t a">Echo</span>
                    <span className="t a">Nats</span>
                    <span className="t a">MongoDB</span>
                    <span className="t a">PostgreSQL</span>
                    <span className="t c">Docker</span>
                    <span className="t c">Firebase</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 4. Webview Mini Game */}
          <div className="project-block">
            <div className="project-header">
              <h3>Webview Mini Game</h3>
              <span className="project-period">10/2024 — Present</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>CaSe Group, Banks</td></tr>
                <tr><td>{t('descriptions')}</td><td>{tr('projMinigameDesc')}</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>6</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>{tr('projMinigameResp1')}</li>
                    <li>{tr('projMinigameResp2')}</li>
                    <li>{tr('projMinigameResp3')}</li>
                    <li>{tr('projMinigameResp4')}</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">Next.js</span>
                    <span className="t b">ReactJS</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Tailwind CSS</span>
                    <span className="t g">Shadcn/ui</span>
                    <span className="t p">Zustand</span>
                    <span className="t a">Go</span>
                    <span className="t a">Echo</span>
                    <span className="t a">MongoDB</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 4. Bio Link */}
          <div className="project-block">
            <div className="project-header">
              <h3>Bio Link</h3>
              <span className="project-period">08/2024 — 09/2024</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>CaSe Group</td></tr>
                <tr><td>{t('descriptions')}</td><td>{tr('projBiolinkDesc')}</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>5</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer, Backend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>{tr('projBiolinkResp1')}</li>
                    <li>{tr('projBiolinkResp2')}</li>
                    <li>{tr('projBiolinkResp3')}</li>
                    <li>{tr('projBiolinkResp4')}</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">Next.js</span>
                    <span className="t b">ReactJS</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Tailwind CSS</span>
                    <span className="t g">Shadcn/ui</span>
                    <span className="t a">Go</span>
                    <span className="t a">Echo</span>
                    <span className="t a">MongoDB</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 6. Cashbag */}
          <div className="project-block">
            <div className="project-header">
              <h3>Cashbag</h3>
              <span className="project-period">06/2022 — Present</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Cashbag</td></tr>
                <tr><td>{t('descriptions')}</td><td>{tr('projCashbagDesc')}</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>6</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>{tr('projCashbagResp1')}</li>
                    <li>{tr('projCashbagResp2')}</li>
                    <li>{tr('projCashbagResp3')}</li>
                    <li>{tr('projCashbagResp4')}</li>
                    <li>{tr('projCashbagResp5')}</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">ReactJS</span>
                    <span className="t b">UmiJS</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Ant Design</span>
                    <span className="t p">Dva.js</span>
                    <span className="t a">Go</span>
                    <span className="t a">Echo</span>
                    <span className="t a">Nats</span>
                    <span className="t a">MongoDB</span>
                    <span className="t a">PostgreSQL</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 7. Chat Application */}
          <div className="project-block">
            <div className="project-header">
              <h3>Chat Application</h3>
              <span className="project-period">02/2023 — 05/2023</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Supplier of Selly</td></tr>
                <tr><td>{t('descriptions')}</td><td>{tr('projChatDesc')}</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>5</td></tr>
                <tr><td>{t('position')}</td><td>Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>{tr('projChatResp1')}</li>
                    <li>{tr('projChatResp2')}</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">ReactJS</span>
                    <span className="t b">UmiJS</span>
                    <span className="t g">Ant Design</span>
                    <span className="t g">Bootstrap</span>
                    <span className="t r">Socket.IO</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 8. Zalo Mini App */}
          <div className="project-block">
            <div className="project-header">
              <h3>Cashbag &amp; Selly Zalo Mini App</h3>
              <span className="project-period">12/2022 — 01/2023</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Cashbag &amp; Selly</td></tr>
                <tr><td>{t('descriptions')}</td><td>{tr('projZaloDesc')}</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>3</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>{tr('projZaloResp1')}</li>
                    <li>{tr('projZaloResp2')}</li>
                    <li>{tr('projZaloResp3')}</li>
                    <li>{tr('projZaloResp4')}</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">UmiJS</span>
                    <span className="t b">TypeScript</span>
                    <span className="t a">Go</span>
                    <span className="t a">Echo</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 9. Mamori.vn */}
          <div className="project-block">
            <div className="project-header">
              <h3>Mamori.vn</h3>
              <span className="project-period">07/2022</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Sub-brand of Selly</td></tr>
                <tr><td>{t('descriptions')}</td><td>{tr('projMamoriDesc')}</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>1</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>{tr('projMamoriResp1')}</li>
                    <li>{tr('projMamoriResp2')}</li>
                    <li>{tr('projMamoriResp3')}</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">ReactJS</span>
                    <span className="t g">Tailwind CSS</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 10. Shop Selly */}
          <div className="project-block">
            <div className="project-header">
              <h3>Shop Selly</h3>
              <span className="project-period">05/2022 — Present</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Buyer of Selly</td></tr>
                <tr><td>{t('descriptions')}</td><td>{tr('projShopSellyDesc')}</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>4</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>{tr('projShopSellyResp1')}</li>
                    <li>{tr('projShopSellyResp2')}</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">ReactJS</span>
                    <span className="t b">UmiJS</span>
                    <span className="t g">Bootstrap</span>
                    <span className="t a">Go</span>
                    <span className="t a">Echo</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>


        </section>

        {/* ── PERSONAL PROJECTS ── */}
        <section>
          <div className="sh">
            <div className="sh-icon" style={{ background: 'var(--cyan-bg)', color: '#0891B2' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 0 1-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
              </svg>
            </div>
            <h2>{t('personalProjects')}</h2>
          </div>

          {/* Pomodoro Focus App */}
          <div className="project-block">
            <div className="project-header">
              <h3>Pomodoro Focus App</h3>
              <span className="project-period">2025</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('descriptions')}</td><td>{tr('projPomodoroDesc')}</td></tr>
                <tr><td>{t('link')}</td><td><a href="https://www.pomodoro-focus.site" target="_blank" rel="noopener noreferrer">https://www.pomodoro-focus.site</a></td></tr>
                <tr><td>{t('position')}</td><td>Fullstack Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>{tr('projPomodoroResp1')}</li>
                    <li>{tr('projPomodoroResp2')}</li>
                    <li>{tr('projPomodoroResp3')}</li>
                    <li>{tr('projPomodoroResp4')}</li>
                    <li>{tr('projPomodoroResp5')}</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">Next.js 14</span>
                    <span className="t b">React 18</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Tailwind CSS</span>
                    <span className="t g">Shadcn/ui</span>
                    <span className="t p">Zustand</span>
                    <span className="t r">Motion</span>
                    <span className="t r">DND Kit</span>
                    <span className="t a">Supabase</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* Liverpool FC Fan Hub */}
          <div className="project-block">
            <div className="project-header">
              <h3>Liverpool FC Fan Hub</h3>
              <span className="project-period">2026</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('descriptions')}</td><td>{tr('projLiverpoolDesc')}</td></tr>
                <tr><td>{t('link')}</td><td><a href="https://liverpool-app-five.vercel.app" target="_blank" rel="noopener noreferrer">https://liverpool-app-five.vercel.app</a></td></tr>
                <tr><td>{t('position')}</td><td>Fullstack Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>{tr('projLiverpoolResp1')}</li>
                    <li>{tr('projLiverpoolResp2')}</li>
                    <li>{tr('projLiverpoolResp3')}</li>
                    <li>{tr('projLiverpoolResp4')}</li>
                    <li>{tr('projLiverpoolResp5')}</li>
                    <li>{tr('projLiverpoolResp6')}</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">Next.js 16</span>
                    <span className="t b">React 19</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Tailwind CSS 4</span>
                    <span className="t p">Zustand</span>
                    <span className="t p">next-intl</span>
                    <span className="t a">Supabase</span>
                    <span className="t c">Groq AI</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

        </section>

        {/* ── CERTIFICATES ── */}
        <section>
          <div className="sh">
            <div className="sh-icon" style={{ background: 'var(--amber-bg)', color: '#D97706' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-4.5A3.375 3.375 0 0 0 13.125 10.875h-2.25A3.375 3.375 0 0 0 7.5 14.25v4.5m9 0H7.5m4.5-12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
              </svg>
            </div>
            <h2>{t('certificates')}</h2>
          </div>
          <div className="edu">
            <div><div className="edu-name">{t('certScrum')}</div></div>
            <div className="edu-date">08/2020</div>
          </div>
          <div className="edu">
            <div><div className="edu-name">{t('certReact')}</div></div>
            <div className="edu-date">01/2022</div>
          </div>
        </section>

      </main>
    </div>
  )
}
