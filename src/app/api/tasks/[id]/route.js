// File: src/app/api/tasks/[id]/route.js
// API Route Handler untuk endpoint /api/tasks/[id]
// Menangani PUT (update task) dan DELETE (hapus task)
// [id] adalah dynamic route parameter

// Import NextResponse untuk membuat response
import { NextResponse } from 'next/server';

// Import prisma client singleton
import prisma from '@/lib/prisma';

// ============================================
// PUT - Update task (toggle completed atau update data)
// ============================================
export async function PUT(request, { params }) {
    try {
        // Await params karena Next.js 15 membuatnya async
        const { id } = await params;

        // Parse id ke integer (Prisma SQLite menggunakan integer untuk id)
        const taskId = parseInt(id);

        // Validasi id harus berupa angka
        if (isNaN(taskId)) {
            return NextResponse.json(
                { error: 'ID tidak valid' },
                { status: 400 }
            );
        }

        // Parse body dari request
        const body = await request.json();

        // Buat object data untuk update
        // Hanya masukkan field yang ada di body
        const updateData = {};

        // Jika completed ada di body, tambahkan ke updateData
        if (typeof body.completed === 'boolean') {
            updateData.completed = body.completed;
        }

        // Jika title ada di body, tambahkan ke updateData
        if (body.title !== undefined) {
            updateData.title = body.title.trim();
        }

        // Jika description ada di body, tambahkan ke updateData
        if (body.description !== undefined) {
            updateData.description = body.description?.trim() || null;
        }

        // Update task di database
        // Prisma akan otomatis update updatedAt
        const updatedTask = await prisma.task.update({
            where: { id: taskId },
            data: updateData,
        });

        // Return task yang sudah diupdate
        return NextResponse.json(updatedTask);
    } catch (error) {
        // Log error untuk debugging
        console.error('Error updating task:', error);

        // Jika task tidak ditemukan
        if (error.code === 'P2025') {
            return NextResponse.json(
                { error: 'Task tidak ditemukan' },
                { status: 404 }
            );
        }

        // Return error response untuk error lainnya
        return NextResponse.json(
            { error: 'Gagal mengupdate task' },
            { status: 500 }
        );
    }
}

// ============================================
// DELETE - Menghapus task
// ============================================
export async function DELETE(request, { params }) {
    try {
        // Await params karena Next.js 15 membuatnya async
        const { id } = await params;

        // Parse id ke integer
        const taskId = parseInt(id);

        // Validasi id harus berupa angka
        if (isNaN(taskId)) {
            return NextResponse.json(
                { error: 'ID tidak valid' },
                { status: 400 }
            );
        }

        // Hapus task dari database
        await prisma.task.delete({
            where: { id: taskId },
        });

        // Return success message dengan status 200
        return NextResponse.json({ message: 'Task berhasil dihapus' });
    } catch (error) {
        // Log error untuk debugging
        console.error('Error deleting task:', error);

        // Jika task tidak ditemukan
        if (error.code === 'P2025') {
            return NextResponse.json(
                { error: 'Task tidak ditemukan' },
                { status: 404 }
            );
        }

        // Return error response untuk error lainnya
        return NextResponse.json(
            { error: 'Gagal menghapus task' },
            { status: 500 }
        );
    }
}
