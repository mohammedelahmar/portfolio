import { headers } from "next/headers";

/**
 * Admin Info API Route — GET /api/admin-info
 *
 * Returns operational context used by the interactive terminal's admin mode.
 * Accessed after a successful `sudo login` in the portfolio's terminal widget.
 *
 * Response shape:
 *   - ip:              The visitor's forwarded IP address
 *   - country:         Geo-IP country code (via Vercel/Cloudflare headers)
 *   - commitMessage:   The latest GitHub commit message for this repo
 *   - commitTimestamp:  ISO timestamp of the latest commit
 *
 * No authentication is enforced — the data is non-sensitive and public.
 */

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
