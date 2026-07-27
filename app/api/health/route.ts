import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export function GET() {
 return NextResponse.json({ status: "ok", service: "mystore", timestamp: new Date().toISOString() });
}