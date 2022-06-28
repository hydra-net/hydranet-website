import TableHeader from './TableHeader';
import { ReactNode } from 'react';
import { mergeClassNames } from '../../../helpers/styles';

const headers: Array<HeaderColumnProps> = [
  {
    content: 'Compare',
  },
  {
    content: 'Layer 3',
  },
  {
    content: 'Layer 2',
  },
  {
    content: 'Layer 1',
    colSpan: 2,
  },
];

const rows: Array<BodyRowProps> = [
  [
    {
      content: 'Features',
    },
    {
      content: 'Cross-chain DEX',
      extra: 'Hydranet DEX',
    },
    {
      content: 'ETH DEX with roll',
      extra: 'Diversify, Uniswap V3',
    },
    {
      content: 'Specific blockchain DEX',
      extra: 'Uniswap v2, Binance DEX',
    },
    {
      content: 'Cross-chain DEX',
      extra: 'Shapeshift',
    },
  ],
  [
    {
      content: 'Native Assets',
      extra: 'Cross-chain interop.',
    },
    {
      content: 'img',
      isImage: true,
    },
    {
      content: 'Only ERC-20',
    },
    {
      content: 'Only ERC-20',
    },
    {
      content: 'img',
      isImage: true,
    },
  ],
  [
    {
      content: 'Fees',
    },
    {
      content: 'DEX fee only',
      extra: 'Taker pays maker',
    },
    {
      content: 'DEX fee only',
      extra: 'Taker pays maker',
    },
    {
      content: 'DEX + Blockchain fee',
    },
    {
      content: 'DEX + Blockchain fee',
    },
  ],
  [
    {
      content: 'Scalability',
      extra: 'Onchain',
    },
    {
      content: 'img',
      isImage: true,
    },
    {
      content: 'Moderate',
      extra: 'Onchain',
    },
    {
      content: 'img',
      isImage: true,
    },
    {
      content: 'img',
      isImage: true,
    },
  ],
  [
    {
      content: 'Privacy',
      extra: 'Onchain',
    },
    {
      content: 'img',
      isImage: true,
    },
    {
      content: 'Moderate',
      extra: 'Onchain',
    },
    {
      content: 'Moderate',
      extra: 'Onchain',
    },
    {
      content: 'Moderate',
      extra: 'Onchain',
    },
  ],
  [
    {
      content: 'Settlement Duration',
    },
    {
      content: '~ 1 second',
    },
    {
      content: 'Seconds - minutes',
    },
    {
      content: 'Seconds - minutes',
    },
    {
      content: 'Seconds - minutes',
    },
  ],
];

const Table = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
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
  headers: Array<HeaderColumnProps>;
};
const Header = ({ headers = [] }: HeaderProps) => {
  /**
   * Loop through each headers to render the full header line
   */
  const renderHeaders = () => {
    return headers.map((header: HeaderColumnProps) => (
      <th
        key={header.content}
        scope="col"
        colSpan={header.colSpan}
        className="text-md px-3 py-3.5 text-center font-semibold uppercase text-white"
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

type HeaderColumnProps = {
  colSpan?: number;
  content: string;
};

type BodyProps = {
  rows: Array<BodyRowProps>;
};
type BodyRowProps = Array<{
  content: string;
  extra?: string;
  additionalClasses?: string;
}>;
const Body = ({ rows = [] }: BodyProps) => {
  /**
   * Loop through rows to dynamically generate each row line
   */
  const renderRows = () => {
    return rows.map((row: BodyRowProps, index) => {
      const aRow = row.map((entry) => (
        <td
          key={entry.content}
          className={
            'text-md whitespace-nowrap py-8 pl-4 pr-3 text-center font-normal font-medium text-brand-greyed sm:pl-6'
          }
        >
          {entry.content}
          {entry.extra && <span className="block">({entry.extra})</span>}
        </td>
      ));
      return (
        <tr
          key={`body-row-${index}`}
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
