import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// DELETE request to delete an appointment by ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await prisma.appointment.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error deleting appointment:', error.message);
      return NextResponse.json({ error: 'Error deleting appointment', details: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Unexpected error occurred' }, { status: 500 });
    }
  }
}

// PUT request to update an appointment by ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const data = await req.json();

    const updatedAppointment = await prisma.appointment.update({
      where: { id },
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

    return NextResponse.json(updatedAppointment);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error updating appointment:', error.message);
      return NextResponse.json({ error: 'Error updating appointment', details: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Unexpected error occurred' }, { status: 500 });
    }
  }
}
