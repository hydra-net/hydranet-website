type CaptionProps = {
  hashLabel: string;
  title: string;
};
const Caption = ({ hashLabel, title }: CaptionProps) => (
  <div className={'mb-6 md:mb-8'}>
    {hashLabel && (
      <div className="sub-title mb-2 font-semibold uppercase text-brand-aqua">
        #{hashLabel}
      </div>
    )}
    <div className="title font-bold capitalize text-white">{title}</div>
  </div>
);

export default Caption;
