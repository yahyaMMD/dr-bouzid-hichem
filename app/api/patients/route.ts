import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// POST: Create a new patient
export async function POST(req: Request) {
  try {
    const data = await req.json();

    const patient = await prisma.patient.create({
      data: {
        fullName: data.fullName,
        age: data.age,
        gender: data.gender,
        phone: data.phone,
        nextAppointmentDate: new Date(data.nextAppointmentDate), // Ensure this is stored as Date
        problem: data.problem,
        totalPrice: data.totalPrice,
        sessionDetails: data.sessionDetails,
        status: data.status,
        registeredAt: new Date(data.registeredAt), // Convert to Date object
      },
    });

    return NextResponse.json(patient);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error creating patient:', error.message);
      return NextResponse.json({ error: 'Error creating patient', details: error.message }, { status: 500 });
    } else {
      console.error('Unexpected error', error);
      return NextResponse.json({ error: 'Unexpected error occurred' }, { status: 500 });
    }
  }
}

// GET: Fetch all patients
export async function GET() {
  try {
    const patients = await prisma.patient.findMany();
    return NextResponse.json(patients);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching patients:', error.message);
      return NextResponse.json({ error: 'Error fetching patients', details: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Unexpected error occurred' }, { status: 500 });
    }
  }
}
