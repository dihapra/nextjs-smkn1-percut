import { codeToHtml } from "shiki";

export function Slide({ title, kicker, children, center }: { title?: string; kicker?: string; children?: React.ReactNode; center?: boolean }) {
  return (
    <section className={center ? "slide center" : "slide"}>
      {kicker && <div className="kicker">{kicker}</div>}
      {title && <h2>{title}</h2>}
      <div className="body">{children}</div>
    </section>
  );
}

export function Section({ no, title, sub }: { no: string; title: string; sub?: string }) {
  return (
    <section className="slide section">
      <div className="section-no">{no}</div>
      <h1>{title}</h1>
      {sub && <p className="lead">{sub}</p>}
    </section>
  );
}

export async function Code({ children, lang = "tsx", file }: { children: string; lang?: string; file?: string }) {
  const html = await codeToHtml(children.trim(), { lang, theme: "github-dark-default" });
  return (
    <figure className="code">
      {file && <figcaption>{file}</figcaption>}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </figure>
  );
}

export function Cols({ children, ratio }: { children: React.ReactNode; ratio?: string }) {
  return <div className="cols" style={ratio ? { gridTemplateColumns: ratio } : undefined}>{children}</div>;
}

export function Note({ children, tone = "info" }: { children: React.ReactNode; tone?: "info" | "warn" | "tip" }) {
  return <div className={`note ${tone}`}>{children}</div>;
}

export function Tree({ children }: { children: string }) {
  const lines = children.replace(/^\n/, "").replace(/\s+$/, "").split("\n");
  return (
    <pre className="tree">
      {lines.map((l, k) => {
        const m = l.match(/^(.*?)(\s+(?:#|→).*)?$/)!;
        const main = m[1];
        const dir = main.match(/^([│├└─\s]*)(.+\/)$/);
        return (
          <span key={k}>
            {dir ? <>{dir[1]}<b>{dir[2]}</b></> : main}
            {m[2] && <i>{m[2]}</i>}
            {"\n"}
          </span>
        );
      })}
    </pre>
  );
}
