import Image from 'next/image';

export default function FiberContents( { fibers }) {
	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-2 gap-y-4 sm:gap-2 m-auto">
          {fibers.map((fiber) => {
            return (
                <div key={fiber.id} className="relative">
                  <Image
                    src={"/tutorials/fibers/"+fiber.image}
                    alt={fiber.alt}
                    height={212}
                    width={212}
                    className="rounded"
                    />
                    <div className="absolute inset-0 max-w-[212px]">
			    		<div className="bg-white/75 p-2 text-black text-sm sm:text-base font-bold capitalize">
			    			{fiber.fiber}
			    		</div>
					</div>
                </div>
              );
          })}
        </div>
	);
}