import type { CSSProperties } from 'react';
import Image from 'next/image';

const styles: Record<string, CSSProperties> = {
  section: {
    paddingTop: 88,
    paddingBottom: 64,
    background: 'var(--paper)',
  },
  photoWrap: { width: 'min(280px, 100%)' },
  photoFrame: {
    position: 'relative',
    width: 'min(280px, 100%)',
    aspectRatio: '4 / 5',
    borderRadius: 6,
    overflow: 'hidden',
  },
  photo: { objectFit: 'cover', objectPosition: 'center 25%' },
  caption: {
    fontFamily: 'var(--mono)',
    fontSize: 11,
    color: 'var(--mute)',
    letterSpacing: '0.04em',
    marginTop: 12,
  },
  body: { display: 'flex', flexDirection: 'column', gap: 18 },
  lede: {
    fontFamily: 'var(--serif)',
    fontWeight: 400,
    fontSize: 22,
    lineHeight: 1.5,
    color: 'var(--ink)',
    margin: 0,
    maxWidth: '52ch',
  },
  p: {
    fontSize: 15,
    lineHeight: 1.6,
    color: 'var(--ink-2)',
    margin: 0,
    maxWidth: '52ch',
  },
};

export function About() {
  return (
    <section className='container' style={styles.section}>
      <p className='section-eyebrow'>About</p>
      <h2 className='section-title' style={{ marginBottom: 40 }}>
        The person you&apos;d be working with.
      </h2>
      <div className='about-grid'>
        <div style={styles.photoWrap}>
          <div style={styles.photoFrame}>
            <Image
              src='/headshot.jpg'
              alt='Trevor Burkholder'
              fill
              sizes='280px'
              style={styles.photo}
            />
          </div>
          <p style={styles.caption}>Cleveland, OH · 2025</p>
        </div>
        <div style={styles.body}>
          <p style={styles.lede}>
            I&apos;m Trevor. I&apos;ve spent the last fifteen years
            writing software — mostly senior IC at consultancies and
            SaaS companies — and I&apos;m freelancing now to work on
            more projects, more directly.
          </p>
          <p style={styles.p}>
            React and TypeScript every day. I&apos;ve been doing it
            long enough to remember when class components were the
            right answer; long enough to know when they aren&apos;t.
            Day-to-day in Node and Postgres on the backend. I work
            fluidly with Claude and ChatGPT — part of how I ship fast,
            not a substitute for thinking.
          </p>
        </div>
      </div>
    </section>
  );
}

