// File: src/lib/prisma.js
// Singleton pattern untuk Prisma Client
// Mencegah pembuatan multiple instance dalam development mode

// Import PrismaClient dari package @prisma/client
import { PrismaClient } from '@prisma/client';

// Deklarasi variabel global untuk menyimpan instance Prisma
// Ini mencegah pembuatan koneksi database baru setiap kali hot reload
const globalForPrisma = global;

// Buat instance PrismaClient baru jika belum ada
// Gunakan instance yang sudah ada jika sudah dibuat sebelumnya
const prisma = globalForPrisma.prisma ?? new PrismaClient();

// Simpan instance ke global object saat development
// Ini mencegah error "too many clients" saat hot reload
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Export prisma instance untuk digunakan di seluruh aplikasi
export default prisma;
