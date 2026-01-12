import { headers } from "next/headers";

const OWNER = "mohammedelahmar";
const REPO = "portfolio";

async function fetchLatestCommit() {
  try {
    const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`, {
      headers: {
        Accept: "application/vnd.github+json",
      },
      // GitHub API requires User-Agent header
      cache: "no-store",
    });
    if (!res.ok) throw new Error("github_fail");
    const data = await res.json();
    const first = Array.isArray(data) && data[0];
    if (!first) return null;
    return {
      message: first.commit?.message as string | undefined,
      date: first.commit?.author?.date as string | undefined,
    };
  } catch (e) {
    console.error("admin-info github error", e);
    return null;
  }
}

export async function GET() {
  const hdrs = await headers();
  const fwd = hdrs.get("x-forwarded-for") || hdrs.get("x-real-ip") || "unknown";
  const country = hdrs.get("x-vercel-ip-country") || hdrs.get("cf-ipcountry") || undefined;
  const commit = await fetchLatestCommit();

  return Response.json(
    {
      ip: fwd,
      country,
      commitMessage: commit?.message,
      commitTimestamp: commit?.date,
    },
    { status: 200 },
  );
}
