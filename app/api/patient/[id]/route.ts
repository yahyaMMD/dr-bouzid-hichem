import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// DELETE: Delete a patient by ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await prisma.patient.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Patient deleted successfully' });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error deleting patient:', error.message);
      return NextResponse.json({ error: 'Error deleting patient', details: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Unexpected error occurred' }, { status: 500 });
    }
  }
}

// PUT: Update a patient by ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const data = await req.json();

    const updatedPatient = await prisma.patient.update({
      where: { id },
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
        registeredAt: new Date(data.registeredAt), // Ensure registeredAt is a valid Date object
      },
    });

    return NextResponse.json(updatedPatient);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error updating patient:', error.message);
      return NextResponse.json({ error: 'Error updating patient', details: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Unexpected error occurred' }, { status: 500 });
    }
  }
}
