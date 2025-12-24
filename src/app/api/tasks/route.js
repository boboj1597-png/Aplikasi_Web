// API Route: GET dan POST tasks
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET - Ambil semua tasks
export async function GET() {
    try {
        const tasks = await prisma.task.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return NextResponse.json({ error: 'Gagal mengambil data tasks' }, { status: 500 });
    }
}

// POST - Tambah task baru
export async function POST(request) {
    try {
        const { title, description } = await request.json();

        if (!title || title.trim() === '') {
            return NextResponse.json({ error: 'Judul task wajib diisi' }, { status: 400 });
        }

        const newTask = await prisma.task.create({
            data: {
                title: title.trim(),
                description: description?.trim() || null,
            },
        });

        return NextResponse.json(newTask, { status: 201 });
    } catch (error) {
        console.error('Error creating task:', error);
        return NextResponse.json({ error: 'Gagal membuat task baru' }, { status: 500 });
    }
}
