// appointments/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const appointment = await prisma.appointment.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        appointmentTypes: data.appointmentTypes,
        problemDescription: data.problemDescription,
        status: data.status,
        appointmentDate: new Date(data.appointmentDate),
      },
    });

    return NextResponse.json(appointment);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error creating appointment:', error.message);
      return NextResponse.json({ error: 'Error creating appointment', details: error.message }, { status: 500 });
    } else {
      console.error('Unexpected error', error);
      return NextResponse.json({ error: 'Unexpected error occurred' }, { status: 500 });
    }
  }
}

// GET function to fetch all appointments
export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany();
    return NextResponse.json(appointments);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching appointments:', error.message);
      return NextResponse.json({ error: 'Error fetching appointments', details: error.message }, { status: 500 });
    } else {
      console.error('Unexpected error', error);
      return NextResponse.json({ error: 'Unexpected error occurred' }, { status: 500 });
    }
  }
}
