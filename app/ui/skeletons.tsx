import Container from '@/app/ui/container';

// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export default function HomeSkeleton() {
  return (
    <div>
      <main className={`${shimmer}`}>
        <HomeBannerSkeleton />
        <HandmadePreviewSkeleton />
        <DiyPreviewSkeleton />
        <CustomPreviewSkeleton />
        <SubscribeformSkeleton />
      </main>
    </div>
  );
}

export function HomeBannerSkeleton() {
  <div className={`${shimmer} w-[1280px] h-[720px] rounded-xl bg-paper p-2 shadow-sm`}>
  </div>
}

export function HandmadePreviewSkeleton() {
  <div className={`${shimmer} rounded-xl bg-paper p-2 shadow-sm`}>
      <div className="mx-auto p-4">
        <div className="mx-auto h-[30px] w-[100px] rounded-md bg-paper" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div>
              <div className={`${shimmer} h-[224px] w-[224px] rounded-md  bg-paper p-2 shadow-sm`} />
              <div className={`${shimmer} h-[224px] w-[224px] rounded-md  bg-paper p-2 shadow-sm`} />
              <div className={`${shimmer} h-[224px] w-[224px] rounded-md  bg-paper p-2 shadow-sm`} />
              <div className={`${shimmer} h-[224px] w-[224px] rounded-md  bg-paper p-2 shadow-sm`} />
              <div className={`${shimmer} h-[224px] w-[224px] rounded-md  bg-paper p-2 shadow-sm`} />
              <div className={`${shimmer} h-[224px] w-[224px] rounded-md  bg-paper p-2 shadow-sm`} />
          </div>
        </div>
      </div>
      <div className="text-center m-2">
        <div className="h-[150px] w-[58px] rounded-md bg-paper" />
      </div>
  </div>
}

export function DiyPreviewSkeleton() {
  <div className={`${shimmer} rounded-xl bg-paper p-2 shadow-sm`}>
    <div className="mx-auto p-4">
      <div className="mx-auto h-[30px] w-[100px] rounded-md bg-paper" />
      <div className="h-[720px] w-[1280px] rounded-md bg-paper" />
    </div>
    <div className="text-center m-2">
      <div className="h-[150px] w-[58px] rounded-md bg-paper" /> 
    </div>
  </div>
}

export function CustomPreviewSkeleton() {
  <div className={`${shimmer} rounded-xl bg-paper p-2 shadow-sm`}>
    <div className="mx-auto p-4">
      <div className="mx-auto h-[30px] w-[100px] rounded-md bg-paper" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div>
              <div className={`${shimmer} h-[224px] w-[224px] rounded-md  bg-paper p-2 shadow-sm`} />
              <div className={`${shimmer} h-[224px] w-[224px] rounded-md  bg-paper p-2 shadow-sm`} />
              <div className={`${shimmer} h-[224px] w-[224px] rounded-md  bg-paper p-2 shadow-sm`} />
              <div className={`${shimmer} h-[224px] w-[224px] rounded-md  bg-paper p-2 shadow-sm`} />
              <div className={`${shimmer} h-[224px] w-[224px] rounded-md  bg-paper p-2 shadow-sm`} />
              <div className={`${shimmer} h-[224px] w-[224px] rounded-md  bg-paper p-2 shadow-sm`} />
          </div>
        </div>
    </div>
    <div className="mx-auto m-2">
      <div className="h-[150px] w-[58px] rounded-md bg-paper" />
    </div>
  </div>
}

export function SubscribeformSkeleton() {
  <div className={`${shimmer} rounded-xl bg-paper p-2 shadow-sm w-[336px] p-2 mx-aut`}>
    <div className="rounded">
      <div className="mx-auto h-[30px] w-[100px] rounded-md bg-paper" />
    </div>
  </div>
}