import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    // Validate input basic
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Vui lòng điền đầy đủ thông tin' },
        { status: 400 }
      );
    }

    // Call external API
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: name,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { message: data.message || 'Đăng ký thất bại' },
        { status: res.status }
      );
    }

    return NextResponse.json(
      { message: 'Đăng ký thành công', data },
      { status: 201 }
    );

  } catch (error) {
    console.error('Registration error:', error);
    
    // Check if API URL is configured
    if (!process.env.NEXT_PUBLIC_API_URL) {
       console.error('MISSING NEXT_PUBLIC_API_URL in .env.local');
       return NextResponse.json(
        { message: 'Lỗi cấu hình server: Thiếu API URL. Vui lòng restart server.' },
        { status: 500 }
      );
    }

    const errorMessage = error instanceof Error ? error.message : 'Không thể kết nối đến server';

    return NextResponse.json(
      { message: `Lỗi kết nối: ${errorMessage}` },
      { status: 500 }
    );
  }
}
