import Image from 'next/image';
import HomePreviewButton from '@/app/ui/home/homepreviewbutton';
import DiyComingSoon from '@/app/ui/shop/diy/diycomingsoon';

export default function DiyPreview() {
	return (
		<div className="my-8">
	      <div className="mx-auto p-4">
	        <h2 className="text-center normal-case m-2">Felting Kits</h2>
	        <DiyComingSoon />
	      </div>
	      <div className="text-center m-2">
	        <HomePreviewButton url="/learn" text="Tell me more" /> 
	      </div>
	    </div>
	);
}