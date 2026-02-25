import { useParams } from "react-router-dom";

export default function RoomDetailPage() {
  const { slug } = useParams();

  return (
    <section className="mx-auto max-w-[1140px] px-5 pb-20 pt-16 md:px-8">
      <h1 className="text-[72px] font-semibold leading-[0.98] tracking-[-0.03em]">Room detail</h1>
      <p className="mt-4 text-[24px] text-black/60">Slug: {slug}</p>
    </section>
  );
}
