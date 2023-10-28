import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById ,fetchCustomers} from '@/app/lib/data';

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const invoice  = await fetchInvoiceById(id);
  const customers =await fetchCustomers();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/admin/invoices' },
          {
            label: 'Edit Invoice',
            href: `/admin/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}