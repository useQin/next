'use server';
import { z } from 'zod';
// 一个 TypeScript 优先的验证库
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
// 清除缓存
import { redirect } from 'next/navigation';
// 重定向
const InvoiceSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});
const CreateInvoice = InvoiceSchema.omit({ id: true, date: true });
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
  try {
    await sql`INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
  revalidatePath('/admin/invoices');
  redirect('/admin/invoices');
}


const UpdateInvoice = InvoiceSchema.omit({ date: true });
export async function updateInvoice(formData: FormData) {
  const { id, customerId, amount, status } = UpdateInvoice.parse({
    id: formData.get('id'),
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;

  await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;

  revalidatePath('/admin/invoices');
  redirect('/admin/invoices');
}

export async function deleteInvoice(formData: FormData) {
  const id = formData.get('id')?.toString();
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath('/admin/invoices');
}

