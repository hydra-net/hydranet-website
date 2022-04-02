type CaptionProps = {
  hashLabel: string;
  title: string;
};
const Caption = ({ hashLabel, title }: CaptionProps) => (
  <div>
    <div className="text-md mb-2 font-semibold uppercase text-brand-aqua">
      #{hashLabel}
    </div>
    <div className="text-3xl font-bold capitalize text-white">{title}</div>
  </div>
);

export default Caption;
