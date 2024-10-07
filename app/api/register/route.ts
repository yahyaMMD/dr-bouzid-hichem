import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, password, role } = body; // Extract role from body
    console.log(body);

    // Validate required fields
    if (!name || !email || !password || !role) {
        return new NextResponse('Name, email, password, and role are required', { status: 400 });
    }

    // Check if user already exists
    const exist = await prisma.user.findUnique({
        where: { email },
    });

    if (exist) {
        return new NextResponse('User already exists', { status: 400 });
    }

    // Hash the password
    const hashePassword = bcrypt.hashSync(password, 10);

    // Create the user with the role
    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashePassword,
            role, // Include role in the user data
        },
    });

    return NextResponse.json(user);
}
