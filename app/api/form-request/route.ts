// /app/api/form-request/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import PatientForm from '../../../lib/models/PatientForm';

export async function POST(req: NextRequest) {
  try {
    // Parse form data
    const body = await req.json(); // Try parsing as JSON
    const { firstName, lastName, email, phone, message } = body;

    // Connect to the database
    await connectToDatabase();

    const newForm = new PatientForm({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    await newForm.save();

    return NextResponse.json({ message: 'Form submitted successfully.' });
  } catch (error) {
    console.error('Error submitting form:', error); 
    return NextResponse.json({ error: 'Form submission failed due to server error' }, { status: 500 });
  }
}


export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const requests = await PatientForm.find({});
    return NextResponse.json({ requests });
  } catch (error) {
    console.error('Error fetching form requests:', error);
    return NextResponse.json({ error: 'Failed to fetch form requests' }, { status: 500 });
  }
}

// DELETE: Delete a form request by ID
export async function DELETE(req: NextRequest) {
  try {
    // Extract the ID from the URL search parameters
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    // Check if the ID is present
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    // Connect to the database
    await connectToDatabase();

    // Find the form by ID and delete it
    const deletedForm = await PatientForm.findByIdAndDelete(id);

    // If the form wasn't found, return an error
    if (!deletedForm) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Request deleted successfully' });
  } catch (error) {
    console.error('Error deleting form request:', error);
    return NextResponse.json({ error: 'Failed to delete form request' }, { status: 500 });
  }
}