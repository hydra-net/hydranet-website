type CaptionProps = {
  hashLabel: string;
  title: string;
};
const Caption = ({ hashLabel, title }: CaptionProps) => (
  <div className={'mb-6 md:mb-8'}>
    {hashLabel && (
      <div className="text-md mb-2 font-semibold uppercase text-brand-aqua">
        #{hashLabel}
      </div>
    )}
    <div className="text-2xl font-bold capitalize text-white md:text-3xl">
      {title}
    </div>
  </div>
);

export default Caption;
