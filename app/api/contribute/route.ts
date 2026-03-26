import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, category, question, answer, note, links } = body

    if (!question?.trim()) {
      return NextResponse.json({ error: 'Câu hỏi không được để trống' }, { status: 400 })
    }

    // Format message for Telegram
    const lines = [
      '📝 *ĐÓNG GÓP CÂU HỎI PHỎNG VẤN*',
      '',
      `👤 *Người gửi:* ${name || 'Ẩn danh'}`,
      email ? `📧 *Email:* ${email}` : '',
      `📂 *Chủ đề:* ${category || 'Chưa chọn'}`,
      '',
      `❓ *Câu hỏi:*`,
      question.trim(),
      '',
      answer?.trim() ? `💡 *Gợi ý đáp án:*\n${answer.trim()}` : '',
      links?.trim() ? `🔗 *Link tham khảo:*\n${links.trim()}` : '',
      note?.trim() ? `📌 *Ghi chú:*\n${note.trim()}` : '',
    ].filter(Boolean).join('\n')

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.warn('Telegram not configured, logging contribution:', lines)
      return NextResponse.json({ ok: true, message: 'Đã ghi nhận (chế độ dev)' })
    }

    const teleRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: lines,
          parse_mode: 'Markdown',
        }),
      }
    )

    if (!teleRes.ok) {
      const err = await teleRes.text()
      console.error('Telegram API error:', err)
      return NextResponse.json({ error: 'Gửi thất bại' }, { status: 502 })
    }

    return NextResponse.json({ ok: true, message: 'Đã gửi thành công!' })
  } catch {
    return NextResponse.json({ error: 'Lỗi server' }, { status: 500 })
  }
}
