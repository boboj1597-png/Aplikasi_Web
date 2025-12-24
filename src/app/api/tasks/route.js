// File: src/app/api/tasks/route.js
// API Route Handler untuk endpoint /api/tasks
// Menangani GET (ambil semua tasks) dan POST (tambah task baru)

// Import NextResponse untuk membuat response
import { NextResponse } from 'next/server';

// Import prisma client singleton
import prisma from '@/lib/prisma';

// ============================================
// GET - Mengambil semua tasks
// ============================================
export async function GET() {
    try {
        // Query semua tasks dari database
        // orderBy: mengurutkan berdasarkan createdAt descending (terbaru di atas)
        const tasks = await prisma.task.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });

        // Return tasks sebagai JSON response
        return NextResponse.json(tasks);
    } catch (error) {
        // Log error untuk debugging
        console.error('Error fetching tasks:', error);

        // Return error response dengan status 500
        return NextResponse.json(
            { error: 'Gagal mengambil data tasks' },
            { status: 500 }
        );
    }
}

// ============================================
// POST - Menambah task baru
// ============================================
export async function POST(request) {
    try {
        // Parse body dari request
        const body = await request.json();

        // Destructure title dan description dari body
        const { title, description } = body;

        // Validasi: title wajib diisi
        if (!title || title.trim() === '') {
            return NextResponse.json(
                { error: 'Judul task wajib diisi' },
                { status: 400 }
            );
        }

        // Buat task baru di database
        // Prisma akan otomatis set id, completed, createdAt, updatedAt
        const newTask = await prisma.task.create({
            data: {
                title: title.trim(),           // Judul task (hilangkan whitespace)
                description: description?.trim() || null, // Deskripsi (opsional)
            },
        });

        // Return task yang baru dibuat dengan status 201 (Created)
        return NextResponse.json(newTask, { status: 201 });
    } catch (error) {
        // Log error untuk debugging
        console.error('Error creating task:', error);

        // Return error response dengan status 500
        return NextResponse.json(
            { error: 'Gagal membuat task baru' },
            { status: 500 }
        );
    }
}
