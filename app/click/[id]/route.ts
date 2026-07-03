import { type NextRequest, NextResponse } from "next/server";

const PARTNER_DESTINATIONS: Record<string, string> = {
  n5kx8rq2bw4mz7vhjft1py9gdu3csale: "https://www.pmu.fr/",
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const sp = request.nextUrl.searchParams;

  const destination = PARTNER_DESTINATIONS[id];
  if (!destination) {
    return NextResponse.redirect(new URL("/", request.url), { status: 302 });
  }

  const destUrl = new URL(destination);

  const forward = ["gclid", "utm_campaign", "gad_campaignid", "gad_source"];
  for (const key of forward) {
    const val = sp.get(key);
    if (val) destUrl.searchParams.set(key, val);
  }

  return NextResponse.redirect(destUrl.toString(), {
    status: 302,
    headers: { "Cache-Control": "no-store, no-cache, must-revalidate" },
  });
}
