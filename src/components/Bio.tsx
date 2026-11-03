export interface BioProps {
  title: string
};

const bioContent = (
  <>
    I'm a software engineer specialized in real-time system development. Having lived across Bolivia, Thailand, Argentina, Malaysia, Philippines and the USA, I easily connect with people and work enabling a culture of learning to exceed expectations.
  </>
);

export default function Bio({ title }: BioProps) {
  return (
    <>
      <div className="py-4">
        <div className="text-primary text-md md:text-xl font-light">{title}</div>
      </div>

      <div className="inline text-sm md:text-lg">
        {bioContent}
      </div>
    </>
  );
}
