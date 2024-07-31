import { fetchExampleCustomPreview }  from '@/app/lib/data';
import CustomList from '@/app/ui/shop/customlist';
import HomePreviewButton from '@/app/ui/home/homepreviewbutton';

export default async function CustomPreview() {
  const examples = await fetchExampleCustomPreview();
  return (
    <div className="mb-6">
      <div className="mx-auto p-4">
        <h2 className="text-center normal-case m-2">Want a Custom Order?</h2>
        <p className="bg-ladycardinal p-2 text-lg rounded">To place an order for a custom piece, email <strong>orders@meadowreveries.com</strong>.</p>
        <CustomList examples={examples} />
      </div>
      <div className="text-center m-2">
        <HomePreviewButton url="/shop/custom" text="Show me more" />
      </div>
    </div>
    );
}