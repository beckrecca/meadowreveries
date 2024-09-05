import TutorialThumbnail from '@/app/ui/learn/tutorialthumbnail';

export default function TutorialList( {tutorials} ) {
	return (
		<div className="my-8">
          <h3 className="text-center text-lg normal-case">Basic & Bite-size Tutorials</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {tutorials.map((tutorial) => {
              return (
                <>
                  <TutorialThumbnail tutorial={tutorial} />
                </>
              );
            })}
          </div>
        </div>
	);
}