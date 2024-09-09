import Image from 'next/image';

export default function FiberContents( { fibers }) {
	return (
		<div className="my-2">
      <h4 className="font-bold">Fibers Included</h4>
        {fibers.map((fiber) => {
          return (
            <>
              <div key={fiber.id} className="my-2">
                <Image
                  src={"/tutorials/fibers/"+fiber.image}
                  alt={fiber.alt}
                  height={50}
                  width={50}
                  className="rounded float-left mr-2"
                  />
              </div>
              <div>
                <p className="max-w-prose">
                  <span className="capitalize"><strong>{fiber.fiber}</strong></span>: {fiber.description}
                </p>
              </div>
              <div className="clear-both" />
            </>
            );
        })}
      </div>
	);
}