import Cards from '@/app/ui/admin/cards';
import LatestInvoices from '@/app/ui/admin/latest-invoices';
import { titleFont } from '@/app/ui/fonts';
import RevenueChart from '@/app/ui/admin/revenue-chart';
import { Suspense } from 'react';
import { RevenueChartSkeleton, InvoiceSkeleton, CardsSkeleton } from '@/app/ui/skeletons';


export default async function Page() {
  return (
    <main>
      <h1 className={`${titleFont.className}  mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <Cards />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<InvoiceSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}