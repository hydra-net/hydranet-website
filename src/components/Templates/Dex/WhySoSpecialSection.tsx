import Caption from '../../Atoms/Caption';
import Table from '../../Molecules/Table/Table';
import { ICaption } from '../../../storyblok/models/ICaption';
import { ITable } from '../../../storyblok/models/ITable';
import { IParagraph } from '../../../storyblok/models/IParagraph';

export type DexWhySoSpecialSectionProps = {
  body: Array<IParagraph>;
  caption: Array<ICaption>;
  table: Array<ITable>;
};
const WhySoSpecialSection = ({
  body,
  caption,
  table,
}: DexWhySoSpecialSectionProps) => (
  <div className="dex-section">
    <Caption hashLabel={caption[0].hashLabel} title={caption[0].title} />
    <div className="mb-8 max-w-2xl text-brand-greyed md:mb-12">
      {body.map((paragraph) => (
        <p key={paragraph._uid}>{paragraph.content}</p>
      ))}
    </div>
    <Table headers={table[0].headers} rows={table[0].rows} />
  </div>
);

export default WhySoSpecialSection;
