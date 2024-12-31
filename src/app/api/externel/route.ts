import { NextResponse } from "next/server";

export async function GET() {
  // JSONPlaceholder API سے ڈیٹا حاصل کریں
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    // اگر ڈیٹا حاصل نہ ہو سکے
    return NextResponse.json({ error: "پوسٹس حاصل کرنے میں ناکام" }, { status: 500 });
  }

  const data = await response.json();

  // ڈیٹا واپس کریں
  return NextResponse.json({ data });
}
