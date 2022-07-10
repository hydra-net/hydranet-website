import { mergeClassNames } from '../../../helpers/styles';
import Picture from '../../Atoms/Picture';
import {
  IStoryblokTableRow,
  ITable,
  ITableHeader,
  ITableRow,
} from '../../../storyblok/models/ITable';

const Table = ({ headers, rows }: ITable) => {
  return (
    <div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden rounded-lg shadow ring-1 ring-black ring-opacity-5">
              <table className="min-w-full divide-y divide-gray-300">
                <Table.Header headers={headers} />
                <Table.Body rows={rows} />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type HeaderProps = {
  headers: Array<ITableHeader>;
};

const Header = ({ headers = [] }: HeaderProps) => {
  /**
   * Loop through each headers to render the full header line
   */
  const renderHeaders = () => {
    return headers.map((header: ITableHeader) => (
      <th
        key={header.content}
        scope="col"
        colSpan={header.colSpan}
        className="px-3 py-3.5 text-center text-sm font-semibold uppercase text-white md:text-base"
      >
        {header.content}
      </th>
    ));
  };

  return (
    <thead className="bg-brand-light-blue">
      <tr>{renderHeaders()}</tr>
    </thead>
  );
};

export type BodyProps = {
  rows: Array<IStoryblokTableRow>;
};

const Body = ({ rows = [] }: BodyProps) => {
  /**
   * Loop through rows to dynamically generate each row line
   */
  const renderRows = () => {
    return rows.map((item, index) => {
      const aRow = item.row?.map((entry: ITableRow) => {
        return (
          <td
            key={entry._uid}
            className={
              'whitespace-nowrap py-6 pl-4 pr-3 text-center text-xs font-medium text-brand-greyed sm:pl-6 md:py-8 md:text-sm'
            }
          >
            {!entry.isImage ? (
              <>
                {entry.content}
                {entry.extra && <span className="block">({entry.extra})</span>}
              </>
            ) : (
              <Picture
                sources={entry?.picture![0]?.sources}
                fallback={entry?.picture![0]?.fallback}
                cssClasses={
                  entry?.picture![0]?.cssClasses || 'w-6 md:w-8 mx-auto'
                }
              />
            )}
          </td>
        );
      });

      return (
        <tr
          key={item._uid}
          className={mergeClassNames(
            'divide-x divide-brand-darker-blue',
            index % 2 === 0 ? 'bg-brand-medium-blue' : 'bg-brand-blue'
          )}
        >
          {aRow}
        </tr>
      );
    });
  };

  return (
    <tbody
      className="divide-y divide-brand-darker-blue border-0"
      style={{ borderTop: 0 }}
    >
      {renderRows()}
    </tbody>
  );
};

Table.Header = Header;
Table.Body = Body;

export default Table;
