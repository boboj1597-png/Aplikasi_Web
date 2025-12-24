// API Route: PUT dan DELETE task by ID
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// PUT - Update task
export async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const taskId = parseInt(id);

        if (isNaN(taskId)) {
            return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
        }

        const body = await request.json();
        const updateData = {};

        if (typeof body.completed === 'boolean') updateData.completed = body.completed;
        if (body.title !== undefined) updateData.title = body.title.trim();
        if (body.description !== undefined) updateData.description = body.description?.trim() || null;

        const updatedTask = await prisma.task.update({
            where: { id: taskId },
            data: updateData,
        });

        return NextResponse.json(updatedTask);
    } catch (error) {
        console.error('Error updating task:', error);
        if (error.code === 'P2025') {
            return NextResponse.json({ error: 'Task tidak ditemukan' }, { status: 404 });
        }
        return NextResponse.json({ error: 'Gagal mengupdate task' }, { status: 500 });
    }
}

// DELETE - Hapus task
export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        const taskId = parseInt(id);

        if (isNaN(taskId)) {
            return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
        }

        await prisma.task.delete({ where: { id: taskId } });
        return NextResponse.json({ message: 'Task berhasil dihapus' });
    } catch (error) {
        console.error('Error deleting task:', error);
        if (error.code === 'P2025') {
            return NextResponse.json({ error: 'Task tidak ditemukan' }, { status: 404 });
        }
        return NextResponse.json({ error: 'Gagal menghapus task' }, { status: 500 });
    }
}
